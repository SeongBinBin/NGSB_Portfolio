import React from "react";
import '../Style/Projects.css'

function Projects(){
    return(
        <div className="project_container">
            <div>
                <div className="project_area">
                    <div className="project_box first">
                        <div className="project_name">
                            <span>Project 1</span>
                            <span>AOBO</span>
                        </div>
                        <div className="project_content">
                            <div>
                                <span>1</span>
                            </div>
                        </div>
                    </div>

                    <div className="project_box second">
                        <div className="project_name">
                            <span>Project 2</span>
                            <span>Fitness Houston</span>
                        </div>
                        <div className="project_content">
                            <div>
                                <span>2</span>
                            </div>
                        </div>
                    </div>

                    <div className="project_box third">
                        <div className="project_name">
                            <span>Project 3</span>
                            <span>TravelMaker</span>
                        </div>
                        <div className="project_content">
                            <div>
                                <img style={{width: '50%', height: '400px',}} src={process.env.PUBLIC_URL + "/Imgs/TravelMaker/TravelMakerMain.png"} alt="TravelMaker Main" />
                                <img style={{width: '50%', height: '400px',}} src={process.env.PUBLIC_URL + "/Imgs/TravelMaker/TravelMakerMap.png"} alt="TravelMaker Main" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Projects