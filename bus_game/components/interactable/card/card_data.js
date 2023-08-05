import { genRandColor } from "../../../lib/allocation/allocation_types";
import { randNatural, randAllocType } from "../../../lib/utilities/rand";

export function genCardData(colorChoices) {
	var colorChoicesClone = colorChoices

	const turnCtCard1 = randNatural(1, 10);
	const turnCtCard2 = randNatural(1, 10);
	const turnCtCard3 = randNatural(1, 10);

	const calcValue = (turnCt) => {
		return 2 * turnCt - 1;
	};

	var colors = [];

	for(let i = 0; i < 3; ++i){
		if(i >= colorChoices.length) {
			colors.push(colorChoicesClone[i]);
		}
		else{
			colors.push(genRandColor());
		}
	}

	const cardData = {
		cards: {
			'card-1': {
				id: 'card-1', 
				value: calcValue(turnCtCard1),
				turnCt: turnCtCard1,
				allocationType: randAllocType(),
				allocColor: colors[0],
				allocationSize: randNatural(1, 40),
			},
			'card-2': {
				id: 'card-2',
				value: calcValue(turnCtCard2),
				turnCt: turnCtCard2,
				allocationType: randAllocType(),
				allocColor: colors[1],
				allocationSize: randNatural(1, 40),
			},
			'card-3': {
				id: 'card-3',
				value: calcValue(turnCtCard3),
				turnCt: turnCtCard3,
				allocationType: randAllocType(),
				allocColor: colors[2],
				allocationSize: randNatural(1, 40),
			}
		},
	};

	return cardData;
}
