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
import { randBool, randNatural } from "../../../lib/utilities/rand";
import { AllocationTypes } from "../../../lib/allocation/allocation_types";
import { makeAllocation } from "../../../lib/allocation/allocation"; 
export default function Board() {
	
	///////////////////////// BOXES //////////////////////////////////////
	const boxCount = 100;
	var boxInfo = genBufferBoxDetails(boxCount);
	const [boxStates, setBoxArray] = useState(boxInfo);
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

	//const boxes = MapBufferBoxes(boxStates);

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
				<Card/>
				<Card/>
				<Card/>
			</CardChoiceBox>
			<button onClick={()=>{
				//// testing buff alloc
				boxInfo = boxStates;
				const allocType = randBool() ? AllocationTypes.Contiguous : AllocationTypes.NonContiguous;
				try {
					setBoxArray(makeAllocation(boxStates, allocType, randNatural(1, 10)));
					incrementTurns();
					addScore(3);
				} catch (error) {
					alert("GAME OVER\n" + error.message);
					for(let i = 0; i < boxCount; ++i) {
						boxInfo[i].occupied = false;
					}
					setTurns(0);
					setScore(0);
				}
				// end testing buff alloc
			}}> CLICK ME </button>
			<BufferBoxDisplay>
				{boxes}
			</BufferBoxDisplay>
		</div>
	);
}
