import bufferBox from "./buffer_box"
export default function MapBufferBoxes(boxDetails) {
	return boxDetails.map( (boxInfo, index) => {
		return bufferBox(boxInfo.occupied, boxInfo.color, index);
	})
} 
