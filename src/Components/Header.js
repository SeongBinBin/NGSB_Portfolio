import React from "react";
import '../Style/Header.css'

function Header(){

    const scroll = (position) => {
        window.scrollTo({
            top: position,
            left: 0,
            // behavior: 'smooth',
        })
    }

    const goHome = () => {
        scroll(0)
    }
    const first = () => {
        scroll(window.innerHeight)
    }
    const second = () => {
        scroll(window.innerHeight * 2)
    }
    const third = () => {
        scroll(window.innerHeight * 3)
    }

    return(
        <div className="Header_container">
            <div className="header_name">
                <p>NGSB</p>
            </div>
            <div className="header_index">
                <p className="home" onClick={goHome}>홈</p>
                <p className="first" onClick={first}>목차</p>
                <p className="second" onClick={second}>목차</p>
                <p className="third" onClick={third}>목차</p>
            </div>
        </div>
    )
}
export default Header