import { Colors } from "../../../lib/allocation/allocation_types";
import "../../../styles/card.css";

export default function SkipDiv({active, clickHandler}) {

	var styling = {};
	if(active) {
		styling = {
			backgroundColor: Colors.orange,
			border: "2px solid black",
			cursor: "pointer",
			borderRadius: "10px",
			width: "280px",
			height: "294px"
		};
	}
	if(active === true) {
		return(
			<div className = "skipDiv" onClick = {clickHandler}
			style = {styling}
			>
			{active ? <h1>SKIP</h1> : <div/>}
			</div>
		)
	}
	return(
		<div className = "skipDiv" >
		</div>
	)

}
