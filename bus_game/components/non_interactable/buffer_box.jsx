import "../../styles/buffer_box.css"
export default function bufferBox(occupied, color) {
	if(occupied == "false") {
		color = "white";
	}
	return (
		<div className = "bufferBox" style = {{backgroundColor: color}}/>
	)	
}
