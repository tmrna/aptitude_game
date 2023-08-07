import "../../../styles/popup.css";
import CardChoiceBox from "../card/card_choice_box";


export function doNothing() {
	return;
}
export default function Popup({trigger, onTrigger = doNothing, onClose = doNothing, closeBtnTxt, children}) {
	if(trigger) {
		if(onTrigger) onTrigger();
		return(
		<div className = "popup">
		<CardChoiceBox>
		<div className = "popupInner">
		{children}
		</div>
		</CardChoiceBox>
		<button className = "closeBtn" onClick={onClose ? onClose : doNothing}>{closeBtnTxt}</button>
		</div>
		)
	}
	else{
		return (<div/>);
	}
}
