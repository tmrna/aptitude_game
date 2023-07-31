import BoxDetails from "./box_details";

export default function genBufferBoxDetails(boxCount) {
	if(isNaN(boxCount)){
		throw new Error("provided size is not a number");
	}
	if(!Number.isInteger(boxCount)) {
		throw new Error("provided size is not an integer");
	}
	if(boxCount < 0) {
		throw new Error("Cannot use negative box count");
	}
	const boxes = Array(boxCount);
	for( let i = 0; i < boxes.length; ++i) {
		boxes[i] = new BoxDetails(false, "blue");
	}
	return boxes;
}
