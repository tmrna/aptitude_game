import bufferBox from "./buffer_box"
export default function MapBufferBoxes(boxDetails) {
	return boxDetails.map( (boxInfo, index) => {
		return bufferBox(boxInfo[0], boxInfo[1], index);
	})
} 
