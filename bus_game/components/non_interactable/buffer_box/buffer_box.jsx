import "../../../styles/buffer_box.css"
export default function bufferBox(occupied, color, index) {
	if(!occupied) {
		color = "white";
	}
	return (
		<div className = "bufferBox" style = {{backgroundColor: color}} key={index}/>
	)	
}
