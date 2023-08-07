import "../../../styles/card.css";
import allocationCalculator from "../../../lib/card_utils/card_allocation_calculator";
import { randBool, randNatural } from "../../../lib/utilities/rand";
import CardHeader from "./card_header";
import CardBody from "./card_body";
import { AllocationTypes } from "../../../lib/allocation/allocation_types";

export default function Card( {cardData} ) {

	/*
	 *	the following will eventually be props:
	 *		turns remaining
	 *
	 */	
	
	return (
		<div 
		className="card"
		style = {{backgroundColor: cardData.allocColor}}
		draggable
		>
		<CardHeader>
		<p>Value: {cardData.value}</p>
		</CardHeader>
		<div className = "spacer"/>
		<CardBody>
		<p>Turns reamaining: {cardData.turnCt}</p>
		<p>Allocation: {cardData.allocationType}</p>
		<p>Space Required: {cardData.allocationSize}</p>
		</CardBody>
		</div>
	)	
	
}
