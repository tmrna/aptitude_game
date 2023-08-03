export const AllocationTypes = {
  NonContiguous: "Non-Contiguous",
  Contiguous: "Contiguous",
}


export const Colors = {
  fuchsia: "fuchsia",
  lightSteelBlue: "lightSteelBlue",
  royalBlue: "royalBlue",
  navy: "navy",
  lime: "lime",
  cyan: "cyan",
  chartreuse: "chartreuse",
  maroon: "maroon",
  red: "red",
  purple: "purple",
  darkViolet: "darkviolet",
  blue: "blue",
  orangeRed: "orangeRed",
  orange: "orange",
  indigo: "indigo",
  green: "green",
  chocolate: "chocolate",
  brown: "brown",
  orchid: "orchid",
}

export const NUM_COLORS = Object.keys(Colors).length;


export function genRandColor() {
	const choice = randNatural(0, NUM_COLORS - 1);
	switch(choice) {
		case 0:
			return Colors.fuchsia;
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
