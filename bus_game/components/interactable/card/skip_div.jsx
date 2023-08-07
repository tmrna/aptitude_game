import "../../../styles/card.css";

export default function SkipDiv({active, clickHandler}) {
	/*
	 *	on turn end generate 3 cards to replace given and take place of the taken card.
	 */
	if(active === true) {
		return(
			<div className = "skipDivActive" onClick = {clickHandler}>
				<h1>SKIP</h1>
			</div>
		)
	}
	return(
		<div className = "skipDiv" >
		</div>
	)

}
