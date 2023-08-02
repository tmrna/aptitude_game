import { scoreBoardStyle } from "./info_display_styles"

export default function ScoreBoard(turnCount, score) {
	return(
		<div className={scoreBoardStyle}>
			<p>Turns: {turnCount}</p>
			<p>Score: {score}</p>
		</div>
	)
}
