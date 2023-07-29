import "../../styles/card.css";
export default function cardHeader({text}) {
	return (
		<div className = "cardHeader">
			<h2 className="cardHeader">{text}</h2>
		</div>
	)
}
