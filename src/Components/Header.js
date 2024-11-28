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
        window.location.reload()
    }
    const profile = () => {
        scroll(window.innerHeight)
    }
    const projects = () => {
        scroll(window.innerHeight * 3)
    }
    const careers = () => {
        scroll(window.innerHeight * 2)
    }

    return(
        <div className="Header_container">
            <div className="header_name">
                <p style={{cursor: 'pointer'}} onClick={goHome}>NGSB</p>
            </div>
            <div className="header_index">
                <p className="home" onClick={goHome}>홈</p>
                <p className="home" onClick={profile}>프로필</p>
                <p className="careers" onClick={careers}>경력</p>
                <p className="projects" onClick={projects}>프로젝트</p>
            </div>
        </div>
    )
}
export default Header