import Popup, { doNothing } from "./Popup";

export default function GameOverPopup({gameState, score, turnCount, message, username, onTrigger = doNothing, onClose = doNothing}) {
	return(
		<Popup onClose = {onClose} onTrigger = {onTrigger} trigger = {!gameState} closeBtnTxt = "Play again">
			<div>
				<h1> GAME OVER </h1>
			</div>
			<div>
				<h2>{message}</h2>
			</div>
			<div>
			<h1>Congratulations {username} your score was {score} after {turnCount} {turnCount === 1 ? "turn" : "turns"}!</h1>
			</div>
		</Popup>
	)
}
