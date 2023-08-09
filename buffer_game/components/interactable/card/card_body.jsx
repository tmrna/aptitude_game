import lazyDiv from "../../../lib/utilities/lazy_div";
import "../../../styles/card.css";
export default function CardBody({children}) {
	return lazyDiv("cardBody", children);
}
