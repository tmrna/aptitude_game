import lazyDiv from "../../../lib/utilities/lazy_div";
import "../../../styles/card.css";
export default function CardHeader({children}) {
	return lazyDiv("cardHeader", children); 
}
