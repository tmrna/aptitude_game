import lazyDiv from  "../../../lib/utilities/lazy_div";
import "../../../styles/buffer_box.css";

export default function BufferBoxDisplay({children}) {
	return lazyDiv("bufferBoxDisplay", children);	
}
