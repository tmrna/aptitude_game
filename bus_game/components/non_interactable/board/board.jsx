import "../../../styles/board.css";
import ScoreBoard from "../info_displays/score_board";
import genBufferBoxDetails from "../buffer_box/gen_buffer_box_details";
import MapBufferBoxes from "../buffer_box/map_buffer_boxes";
import BufferBoxDisplay from "../buffer_box/buffer_box_display";
import CardChoiceBox from "../../interactable/card/card_choice_box"; 
import Card from "../../interactable/card/card";
import CardDeck from "../../interactable/card/card_deck";
import UserPlaque from "../info_displays/user_plaque";import { useState } from "react";

export default function Board() {
	const boxCount = 100;
	var boxInfo = genBufferBoxDetails(boxCount);
	const [boxStates, setBoxArray] = useState(boxInfo);
	const boxes = MapBufferBoxes(boxStates);
	console.log(boxInfo);
	const score = 5;
	const turnCount = 4;
	const upperLeft = ScoreBoard(turnCount, score);
	const username = "Player 1";
	const playerPlaque = UserPlaque(username);
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
				for(let i = 0; i < boxCount; ++i) {
					boxInfo[i].occupied = true;
					boxInfo[i].color = "purple";
				}
				setBoxArray(boxInfo);
				console.log(boxStates);
			}}> CLICK ME </button>
			<BufferBoxDisplay>
				{boxes}
			</BufferBoxDisplay>
		</div>
	);
}
