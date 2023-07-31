import lazyDiv from "../../lib/utilities/lazy_div";
import "../../styles/view_port.css";
export default function ViewPort({children}) {
	return lazyDiv("viewPort", children);
}
