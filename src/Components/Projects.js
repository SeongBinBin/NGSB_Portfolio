import React from "react";
import '../Style/Projects.css'

function Projects(){
    const scroll = (position) => {
        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth',
        })
    }

    const goAOBO = () => {
        scroll(window.innerHeight * 3)
    }
    const goFH = () => {
        scroll(window.innerHeight * 4)
    }
    const goTM = () => {
        scroll(window.innerHeight * 5)
    }

    return(
        <div className="project_container">
            <div className="project_area">
                <div className="project_box first">
                    <div className="project_name">
                        <span onClick={goAOBO}>프로젝트 1</span>
                        <span onClick={goAOBO}>AOBO</span>
                    </div>
                    <div className="project_content">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/Imgs/AOBO_Represent.png"} alt="AOBO_Section" onClick={goAOBO} />
                        </div>
                    </div>
                </div>
                <div className="project_box second">
                    <div className="project_name">
                        <span onClick={goFH}>프로젝트 2</span>
                        <span onClick={goFH}>Fitness Houston</span>
                    </div>
                    <div className="project_content">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/Imgs/FitnessHouston_Represent.png"} alt="FitnessHouston_Section" onClick={goFH} />
                        </div>
                    </div>
                </div>
                <div className="project_box third">
                    <div className="project_name">
                        <span onClick={goTM}>프로젝트 3</span>
                        <span onClick={goTM}>TravelMaker</span>
                    </div>
                    <div className="project_content">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/Imgs/TravelMaker_Represent.png"} alt="TravelMaker_Section" onClick={goTM} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects