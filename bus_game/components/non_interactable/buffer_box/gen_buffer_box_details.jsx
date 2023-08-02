import BoxDetails from "./box_details";

export default function genBufferBoxDetails(boxCount) {
	if(isNaN(boxCount)){
		throw new TypeError("provided size is not a number");
	}
	if(!Number.isInteger(boxCount)) {
		throw new TypeError("provided size is not an integer");
	}
	if(boxCount < 0) {
		throw new Error("Cannot use negative box count");
	}
	const boxes = Array(boxCount);
	for( let i = 0; i < boxes.length; ++i) {
		if(i % 2){
			boxes[i] = new BoxDetails(false, "orange");
		}
		else{
			boxes[i] = new BoxDetails(true, "blue");
		}
	}
	return boxes;
}