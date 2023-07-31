import lazyDiv from "../../../lib/utilities/lazy_div";
import "../../../styles/card.css";
export default function CardChoiceBox({children}) {
	return lazyDiv("cardChoiceBox", children);
}
