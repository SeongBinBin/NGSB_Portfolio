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
    const profile = () => {
        scroll(window.innerHeight)
    }
    const projects = () => {
        scroll(window.innerHeight * 2)
    }
    const first = () => {
        scroll(window.innerHeight * 3)
    }
    const second = () => {
        scroll(window.innerHeight * 4)
    }
    const third = () => {
        scroll(window.innerHeight * 5)
    }

    return(
        <div className="Header_container">
            <div className="header_name">
                <p style={{cursor: 'pointer'}} onClick={goHome}>NGSB</p>
            </div>
            <div className="header_index">
                <p className="home" onClick={goHome}>홈</p>
                <p className="home" onClick={profile}>프로필</p>
                <p className="projects" onClick={projects}>프로젝트</p>
                <p className="first" onClick={first}>1</p>
                <p className="second" onClick={second}>2</p>
                <p className="third" onClick={third}>3</p>
            </div>
        </div>
    )
}
export default Header