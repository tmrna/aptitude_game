import { AllocationTypes, Colors, NUM_COLORS } from "../../../lib/allocation/allocation_types";
import { randNatural } from "../../../lib/utilities/rand";

export function getFreeBoxIndicies({boxArray}) {
	var result = [];
	for(let i = 0; i < boxArray.length; ++i) {
		if(!boxArray[i].occupied) result.push(i);
	}
	return result;
}

export function makeAllocation({boxArray}, {allocationType}, {allocationSize}) {
	const indicies = getFreeBoxIndicies(boxArray);
	const err = "Allocation cannot be made: ";

	// catch for gameover
	if(allocationSize > indicies.length) throw new Error(err + "insufficient resources");

	var allocationResult;

	allocationResult.indicies = [];
	allocationResult.color = genColor(boxArray);

	if(allocationType === AllocationTypes.NonContiguous) {

	}


}

export function genColorOptions(boxArray) {
	var boxColors = [];
	for(let i = 0; i < boxArray.length; ++i) {
		if(!boxArray[i].color) throw new Error("Uninitialized box color!");
		if(!(boxArray[i].color in boxColors)){
			boxColors.push(boxArray[i].color);
		}
	}
	if(boxColors.length === NUM_COLORS){
		console.log("exceeded max colors");
		return [genRandColor()];
	}

	var colorOptions = Object.keys(Colors);
	for(let i = 0; i < boxColors.length; ++i) {
		if(boxColors[i] in colorOptions) {
			const targetIndex = colorOptions.indexOf(boxColors[i]);
			if(targetIndex)
				colorOptions.splice(targetIndex, 1);
		}
	}

	return colorOptions;
}

export function genRandColor() {
	const choice = randNatural(0, NUM_COLORS - 1);
	switch(choice) {
		case 0:
			return Colors.fuschia;
		case 1:
			return Colors.lightSteelBlue;
		case 2:
			return Colors.royalBlue;
		case 3: 
			return Colors.navy;
		case 4:
			return Colors.lime;
		case 5:
			return Colors.cyan;
		case 6:
			return Colors.chartreuse;
		case 7:
			return Colors.maroon;
		case 8:
			return Colors.red;
		case 9:
			return Colors.purple;
		case 10:
			return Colors.darkViolet;
		case 11:
			return Colors.blue;
		case 12:
			return Colors.orangeRed;
		case 13:
			return Colors.orange;
		case 14:
			return Colors.indigo;
		case 15:
			return Colors.green;
		case 16:
			return Colors.chocolate;
		case 17:
			return Colors.brown;
		case 18:
			return Colors.orchid;
	}
}
