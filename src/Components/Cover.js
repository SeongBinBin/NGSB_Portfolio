import React from "react";
import '../Style/Cover.css'
import { AiOutlineDown } from "react-icons/ai";

function Cover(){
    return(
        <div className="Cover">
            <div className="Cover_container">
                <span className="cover_left">NGSB's</span>
                <span className="cover_right">PORTFOLIO</span>
            </div>
            <div className="Scroll_Impact">
                <span className="arrow"><AiOutlineDown size={25}/></span>
                <span className="Scroll_Text">Scroll</span>
            </div>
        </div>
    )
}
export default Cover