import "../../../styles/board.css";
import ScoreBoard from "../info_displays/score_board";
import genBufferBoxDetails from "../buffer_box/gen_buffer_box_details";
import MapBufferBoxes from "../buffer_box/map_buffer_boxes";
import BufferBoxDisplay from "../buffer_box/buffer_box_display";
import CardChoiceBox from "../../interactable/card/card_choice_box"; 
import Card from "../../interactable/card/card";
import CardDeck from "../../interactable/card/card_deck";
import UserPlaque from "../info_displays/user_plaque";
import { useState } from "react";
import { makeAllocation } from "../../../lib/allocation/allocation"; 
import { genCardData } from "../../interactable/card/card_data";
import { genColorChoice } from "../../../lib/allocation/allocation_helper";
export default function Board() {
	
	///////////////////////// BOXES //////////////////////////////////////
	const boxCount = 100;
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
	}
	const upperLeft = ScoreBoard(turnCount, score);
	////////////////////END SCORE BOARD //////////////////////////////
	
	////////////////////////PLAYER PLAQUE ////////////////////////////
	const username = "Player 1";
	const playerPlaque = UserPlaque(username);
	////////////////////////END PLAYER PLAQUE ////////////////////////

	
	////////////////////////////CARDS////////////////////////////
	const [cardDataStates, setCardDataStates] = useState(genCardData(genColorChoice(boxStates)))
	
	const allocBuffer = (cardData) => {
		const color = cardData.allocColor;
		const turns = cardData.turnCt;
		const type = cardData.allocationType;
		const size = cardData.allocationSize;
		const value = cardData.value;
		try {
			console.log(boxStates);
			console.log(cardDataStates);
			setBoxArray(makeAllocation(boxStates, type, size, color, turns));
			incrementTurns();
			addScore(value);
		} catch (error) {
			const scoreStr = "\nYour score was: " + score.toString();
			alert("GAME OVER\n" + error.message + scoreStr);
			setBoxArray(boxInitial);
			setTurns(0);
			setScore(0);
		}
	}	
	const makeCards = () => {
		setCardDataStates(genCardData(genColorChoice(boxStates)));
	}
	const clickCard1 = () => {
		allocBuffer(cardDataStates.cards["card-1"]);
		makeCards();
	}

	const clickCard2 = () => {
		allocBuffer(cardDataStates.cards["card-2"]);
		makeCards();
	}

	const clickCard3 = () => {
		allocBuffer(cardDataStates.cards["card-3"]);
		makeCards();
	}

	return(
		<div className = "board">	
			<CardChoiceBox>
				<div className ="leftFlex">
				{upperLeft}
				</div>
				{playerPlaque}
				<div className = "rightFlex">
				<CardDeck/>
				</div>
			</CardChoiceBox>
			<CardChoiceBox>
				<div onClick = {clickCard1}>
				{Card(cardDataStates.cards["card-1"])}
				</div>
				<div onClick = {clickCard2}>
				{Card(cardDataStates.cards["card-2"])}
				</div>
				<div onClick = {clickCard3}>
				{Card(cardDataStates.cards["card-3"])}
				</div>
			</CardChoiceBox>
			<div style={{width: "30px", height: "40px"}}/>
			<BufferBoxDisplay>
				{boxes}
			</BufferBoxDisplay>
		</div>
	);
}
