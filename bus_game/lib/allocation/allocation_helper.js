import { Colors, NUM_COLORS, genRandColor } from "./allocation_types";
import { randNatural } from "../utilities/rand";


export function getFreeBoxIndicies(boxArray) {
	var result = [];
	for(let i = 0; i < boxArray.length; ++i) {
		if(!boxArray[i].occupied) result.push(i);
	}
	return result;
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

export function genColorChoice(boxArray) {
	var colorOptions = genColorOptions(boxArray);
	return colorOptions[randNatural(0, colorOptions.length - 1)];
}

export function genNonContiguousAlloc(boxArray, freeIndiciesArray, allocationSize) {
	const colorChoice = genColorChoice(boxArray);	
	
	const shuffel = () => {
		for(let i = freeIndiciesArray.length - 1; i > 0 ; --i) {
			var targetIndex = randNatural(0, i);
			var tmp = freeIndiciesArray[i];
			freeIndiciesArray[i] = freeIndiciesArray[targetIndex];
			freeIndiciesArray[targetIndex] = tmp;
		}	
	}
	shuffel();
	for(let i  = 0; i < allocationSize; ++i) {
		const index = freeIndiciesArray[i];
		boxArray[index].color = colorChoice;
		boxArray[index].occupied = true;
	}	
	return boxArray;
}

export function genContiguousAlloc(boxArray, freeIndiciesArray, allocationSize) {
	const colorChoice = genColorChoice(boxArray);

	if(freeIndiciesArray.length === boxArray.length) {
		var left = randNatural(0, boxArray.length - 1 - allocationSize);
		const right = left + allocationSize;
		while(left < right) {
			boxArray[left].occupied = true;
			boxArray[left].color = colorChoice;
			++left;
		}
		return boxArray;
	}

	else if(freeIndiciesArray.length === 1) {
		boxArray[freeIndiciesArray[0]].color = colorChoice;
		boxArray[freeIndiciesArray[0]].occupied = true;
		return boxArray;
	}
	var possibleDestinations = [];
	var ptr = 0;
	while(ptr < freeIndiciesArray.length - allocationSize) {
		const ptrFront = ptr + allocationSize;
		const valueLb = freeIndiciesArray[ptr];
		const valueUb = freeIndiciesArray[ptrFront];
		if(valueUb - valueLb === allocationSize) {
			possibleDestinations.push([valueLb, valueUb]);
		}
		++ptr;
	}

	if(possibleDestinations.length === 0) {
		throw new Error("no segment long enough for allocation");
	}

	const destinationChoiceIndex = randNatural(0, possibleDestinations.length - 1);
	const destinationChoice = possibleDestinations[destinationChoiceIndex];
	for(let i = destinationChoice[0]; i <= destinationChoice[1]; ++i) {
		boxArray[i].occupied = true;
		boxArray[i].color = colorChoice;
	}

	return boxArray;
}
