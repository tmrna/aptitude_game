import { Colors } from "../../../lib/allocation/allocation_types";
import "../../../styles/buffer_box.css"
export default function bufferBox(index, boxStatus) {
	const color = boxStatus.occupied ? boxStatus.color : "white";
	
	const fontColor = isBright(color) ? "black" : "white"; 

	const shadow = {
		boxShadow: "2px 32px 12px " + color,
		width: "12px",
		height: "12px",
		zIndex: "2",
	};

	return (
		<div key = {index}>
		<div className = "bufferBox" style = {{backgroundColor: color}}/>
		<div className = "bufferBoxCounter" style={{color: fontColor}}>
		{boxStatus.turnCt > 0 ? <p>{boxStatus.turnCt}</p> : <p/>}
		</div>
		<div style = {shadow}/>
		</div>
	)	
}


export function isBright(color) {
	return color === Colors.lime || color === Colors.fuchsia || color === Colors.chartreuse || color === Colors.cyan || color === Colors.orange
	|| color === Colors.orange;
}
