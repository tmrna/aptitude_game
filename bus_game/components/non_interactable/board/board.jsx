import "../../../styles/board.css";
import ScoreBoard from "../info_displays/score_board";
import genBufferBoxDetails, {BOX_COUNT} from "../buffer_box/gen_buffer_box_details";
import MapBufferBoxes from "../buffer_box/map_buffer_boxes";
import BufferBoxDisplay from "../buffer_box/buffer_box_display";
import CardChoiceBox from "../../interactable/card/card_choice_box"; 
import Card from "../../interactable/card/card";
import SkipDiv from "../../interactable/card/skip_div";
import UserPlaque from "../info_displays/user_plaque";
import { useState } from "react";
import { makeAllocation, countDown } from "../../../lib/allocation/allocation"; 
import { genCardData } from "../../interactable/card/card_data";
import { genColorChoice } from "../../../lib/allocation/allocation_helper";
import GameOverPopup from "../../interactable/popup/game_over";

export default function Board() {
	///////////////////////// BOXES //////////////////////////////////////
	const boxCount = BOX_COUNT;
	const boxInitial = genBufferBoxDetails(boxCount);
	const [boxStates, setBoxArray] = useState(boxInitial);
	const boxes = MapBufferBoxes(boxStates);
	///////////////////////// END BOXES /////////////////////////////////
	
	////////////////////// SCORE BOARD /////////////////////////////////
	const [score, setScore] = useState(0);
	const [turnCount, setTurns] = useState(0);
	const addScore = (value) => {
		setScore(score + value);
	}
	const incrementTurns = () => {
		setTurns(turnCount + 1);
		incrementSkipCt();
	}
	const upperLeft = ScoreBoard(turnCount, score);
	
	////////////////////END SCORE BOARD //////////////////////////////

	///////////////////GAME STATE AND MESSAGES //////////////////////
	const [gameState, setGameState] = useState(true);
	const [gameOverMsg, setGameOverMsg] = useState("");

	const resetGame = () => {
		console.log("resetting game");
		setScore(0);
		setTurns(0);
		setTurnSkipCt(0);
		setBoxArray(boxInitial);
		setGameState(true);
	}

	///////////////////END GAME STATE ////////////////////////////////
	
	////////////////////////PLAYER PLAQUE ////////////////////////////
	const username = "Player 1";
	const playerPlaque = UserPlaque(username);
	////////////////////////END PLAYER PLAQUE ////////////////////////

	//////////////////////// SKIP TURNS //////////////////////////////
	const turnsRequired = 5;
	const [turnSkipCt, setTurnSkipCt] = useState(0);
	const skipTurn = () => {
		makeCards();
		incrementTurns();
		setTurnSkipCt(0);
		var boxCopy = boxStates;
		countDown(boxCopy);
		setBoxArray(boxCopy);
	}
	const incrementSkipCt = () => {
		setTurnSkipCt(1 + turnSkipCt);
	}
	//////////////////////// END SKIP TURNS ////////////////////////

	//////////////////////////// CARDS ////////////////////////////////////////////////////////
	const [cardDataStates, setCardDataStates] = useState(genCardData(genColorChoice(boxStates)))
	
	const allocBuffer = (cardData) => {
		const color = cardData.allocColor;
		const turns = cardData.turnCt;
		const type = cardData.allocationType;
		const size = cardData.allocationSize;
		const value = cardData.value;
		try {
			setBoxArray(makeAllocation(boxStates, type, size, color, turns));
			incrementTurns();
			addScore(value);
		} catch (error) {
			setGameOverMsg(error.message);
			setGameState(false);
		}
	}	
	const makeCards = () => {
		setCardDataStates(genCardData(genColorChoice(boxStates)));
	}

	const genCardClickHandlers = () => {
		const handlers = [];
		for(var cardKey in cardDataStates.cards) {
			const card = cardDataStates.cards[cardKey];
			const clickHandler = () => {
				allocBuffer(card);
				makeCards();
			}
			handlers.push(clickHandler);
		}
		return handlers;
	}

	var cardHandlers = genCardClickHandlers();
	
	///////////////////////////////////////  PAGE /////////////////////////////////////////////
	
	return(
		<div className = "board">	
			<GameOverPopup onClose = {resetGame} score = {score} turnCount = {turnCount} message = {gameOverMsg} gameState = {gameState}
				username={username}/>	
			<CardChoiceBox>
				<div className ="leftFlex">
				{upperLeft}
				</div>
				{playerPlaque}
				<div className = "rightFlex">
					<SkipDiv active = {turnSkipCt > turnsRequired} clickHandler = {skipTurn}/>
				</div>
			</CardChoiceBox>
			<CardChoiceBox>
				{Object.keys(cardDataStates.cards).map( (key, index) => {
					const cardData = cardDataStates.cards[key];
					return(
						<div onClick = {cardHandlers[index]} >
						<Card cardData = {cardData}/>
						</div>
					)
				})}	
			</CardChoiceBox>
			<div style={{width: "30px", height: "40px"}}/>
			<CardChoiceBox>
			<BufferBoxDisplay>
				{boxes}
			</BufferBoxDisplay>
			</CardChoiceBox>
		</div>
	);
}
