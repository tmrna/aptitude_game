import "../../../styles/board.css";
import lazyDiv from "../../../lib/utilities/lazy_div";
export default function Board({children}) {
	return lazyDiv("board", children); 
}
