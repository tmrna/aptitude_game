import CardDeck from "../../interactable/card/card_deck";
import "../../../styles/board.css";
import ScoreBoard from "../info_displays/score_board";
import UserPlaque from "../info_displays/user_plaque";
import CardChoiceBox from "../../interactable/card/card_choice_box";


export default function UpperRegion({turnCount}, {score}, {username}) {
	const upperLeft = ScoreBoard(turnCount, score);
	const playerPlaque = UserPlaque(username);

	return(
		<div className = "upperRegion">
			<CardChoiceBox>
				<div className ="leftFlex">
				{upperLeft}
				</div>
				{playerPlaque}
				<div className = "rightFlex">
				<CardDeck/>
				</div>
			</CardChoiceBox>	

		</div>
	)
}
