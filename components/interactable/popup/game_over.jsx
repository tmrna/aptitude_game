import { deserializeScores } from "../../../lib/cookies/score_cookies";
import { DESCENDING_SORT, mergeSort } from "../../../lib/utilities/merge_sort";
import FullPopup, { doNothing } from "./full_popup";

export default function GameOverFullPopup({gameState, score, turnCount, message, username, onTrigger = doNothing, onClose = doNothing}) {
	return(
		<FullPopup onClose = {onClose} onTrigger = {onTrigger} trigger = {!gameState} closeBtnTxt = "Play again">
			<div>
				<h1> GAME OVER </h1>
			</div>
			<div>
				<h2>{message}</h2>
			</div>
			<div>
				<h1>Congratulations {username} your score was {score} after {turnCount} {turnCount === 1 ? "turn" : "turns"}!</h1>
			</div>
			<div>
				<h2>Scoreboard</h2>
			</div>
			<div className = "scrollableScore">
				{mergeSort(deserializeScores(), DESCENDING_SORT, 1).map((array) => {
					return(
					<div>
						<p>{array[0]} : {array[1]}</p>
					</div>
					)
				})}
			</div>
		</FullPopup>
	)
}
