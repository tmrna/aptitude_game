import { Colors } from "../../../lib/allocation/allocation_types";
import "../../../styles/card.css";
import { doNothing } from "../popup/full_popup";

export default function SkipDiv({active, clickHandler}) {

	var styling = {};
	if(active) {
		styling = {
			backgroundColor: Colors.orange,
			border: "2px solid black",
			cursor: "pointer",
			borderRadius: "10px",
			width: "280px",
			height: "126px",
			color: "whitesmoke"
		}
	}
	return(
		<div className = "skipDiv" onClick = {active ? clickHandler : doNothing}
		style = {styling}
		>
			{active ? <h1>SKIP</h1> : <div/>}
		</div>
	)
}
