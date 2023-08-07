import "../../../styles/card.css";
import CardHeader from "./card_header";
import CardBody from "./card_body";

export default function Card( {cardData} ) {

	return (
		<div 
		className="card"
		style = {{backgroundColor: cardData.allocColor}}
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
