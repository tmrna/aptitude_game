import "../../styles/card.css";
//import allocationCalculator from "../../lib/allocation/allocation_calculator";
import randBool from "../../lib/utilities/rand_bool";
import { useState } from "react";

export default function Card( { children} ) {

	/*
	 *	the following will eventually be props:
	 *		turns remaining
	 *
	 */
	
	const initialTurns = Math.floor(Math.random() * 10 % 5 + 1);
	const pointValue = initialTurns === 1 ? 1 : initialTurns + initialTurns - 1;
	var turnsRemaining = useState(initialTurns);	
	const allocationType = randBool() ? "Contiguous" : "Non-contiguous";
//	const allocationCost = allocationCalculator(pointValue, allocationType);
	const allocationCost = 4;
	
	return (
		<div 
		className="card"
		draggable
		>
		<p>Value: {pointValue}</p>

		<p>Turns reamaining: {turnsRemaining}</p>
		<p>Allocation: {allocationType}</p>
		<p>Space Required: {allocationCost}</p>
		{children}	
		</div>
	)	
	
}
