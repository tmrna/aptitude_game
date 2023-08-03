import "../../../styles/card.css";
import allocationCalculator from "../../../lib/card_utils/card_allocation_calculator";
import { randBool, randNatural } from "../../../lib/utilities/rand";
import CardHeader from "./card_header";
import CardBody from "./card_body";
import { AllocationTypes } from "../../../lib/allocation/allocation_types";

export default function Card( {children}/*{value}, {turnsRemaining}, {allocationType}*/ ) {

	/*
	 *	the following will eventually be props:
	 *		turns remaining
	 *
	 */	
	const initialTurns = randNatural(1, 10);
	const pointValue = initialTurns === 1 ? 1 : initialTurns + initialTurns - 1;
	var turnsRemaining = initialTurns;
	const allocationType = randBool() ? AllocationTypes.Contiguous : AllocationTypes.NonContiguous;
	const allocationCost = allocationCalculator(pointValue, allocationType);
	
	return (
		<div 
		className="card"
		draggable
		>
		<CardHeader>
		<p>Value: {pointValue}</p>
		</CardHeader>
		<div className = "spacer"/>
		<CardBody>
		<p>Turns reamaining: {turnsRemaining}</p>
		<p>Allocation: {allocationType}</p>
		<p>Space Required: {allocationCost}</p>
		{children}
		</CardBody>
		</div>
	)	
	
}
