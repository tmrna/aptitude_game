import BoxDetails from "./box_details";

export const BOX_COUNT = 100;

export default function genBufferBoxDetails() {
	const boxes = Array(BOX_COUNT);
	for( let i = 0; i < boxes.length; ++i) {
			boxes[i] = new BoxDetails(false, "white", 0);
	}
	return boxes;
}
