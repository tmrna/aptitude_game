import { AllocationTypes, Colors, NUM_COLORS } from "../../../lib/allocation/allocation_types";
import { randNatural } from "../../../lib/utilities/rand";

export function getFreeBoxIndicies(boxArray) {
	var result = [];
	for(let i = 0; i < boxArray.length; ++i) {
		if(!boxArray[i].occupied) result.push(i);
	}
	return result;
}

export function makeAllocation(boxArray, {allocationType}, {allocationSize}) {
	var freeIndicies = getFreeBoxIndicies(boxArray);
	const err = "Allocation cannot be made: ";

	// catch for gameover
	if(allocationSize > freeIndicies.length) throw new Error(err + "insufficient resources");

	var colorOptions = genColorOptions(boxArray);
	const colorChoice = colorOptions[randNatural(0, colorOptions.length - 1)];

	if(allocationType === AllocationTypes.NonContiguous) {
		while(allocationSize > 0) {
			const popIndex = randNatural(0, freeIndicies.length - 1);
			delete freeIndicies[popIndex];
			boxArray[popIndex].occupied = true;
			boxArray[popIndex].color = colorChoice;
			--allocationSize;
		}
	}

	if(allocationType === AllocationTypes.Contiguous) {
		if(freeIndicies.length === boxArray.length) {
			var left = randNatural(0, boxArray.length - 1 - allocationSize);
			const right = left + allocationSize;
			while(left < right){
				boxArray[left].occupied = true;
				boxArray[left].color = colorChoice;
				++left;
			}
			return boxArray;
		}

		else if(freeIndicies.length === 1){
			boxArray[freeIndicies[0]].color = colorChoice;
			boxArray[freeIndicies[0]].occupied = true;
			return boxArray;
		}
		
		var possibleDestinations = [];
		var ptr = 0;
		var upperBound;
		while(ptr < freeIndicies.length - allocationSize) {
			upperBound = ptr + allocationSize;
			if(freeIndicies[upperBound] - freeIndicies[ptr] === allocationSize){
				possibleDestinations.push([ptr, upperBound]);
			}
			++ptr;
		}
		if(possibleDestinations.length === 0){
			throw new Error(err + "no segment long enough for allocation");
		}

		const destinationChoice = randNatural(0, possibleDestinations.length - 1);
		for(let i = destinationChoice[0]; i <= destinationChoice[1]; ++i){
			boxArray[i].color = colorChoice;
			boxArray[i].occupied = true;
		}
		return boxArray;
	}


}

export function genColorOptions(boxArray) {
	var boxColors = [];
	for(let i = 0; i < boxArray.length; ++i) {
		if(!boxArray[i].color) throw new Error("Uninitialized box color!");

		if(!boxArray[i].occupied && !(boxArray[i].color in boxColors)){
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
