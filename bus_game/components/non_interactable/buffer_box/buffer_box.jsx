import "../../../styles/buffer_box.css"
export default function bufferBox(occupied, color, index) {
	if(!occupied) {
		color = "white";
	}
	const shadow = {
		boxShadow: "2px 32px 12px " + color,
		width: "12px",
		height: "12px",
		zIndex: "2",
	};

	return (
		<div key = {index}>
		<div className = "bufferBox" style = {{backgroundColor: color}}/>
		<div style = {shadow}/>
		</div>
	)	
}
