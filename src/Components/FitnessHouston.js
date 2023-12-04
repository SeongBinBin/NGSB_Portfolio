import React, {useState} from "react";
import '../Style/FitnessHouston.css'
import { AiOutlineLeft, AiOutlineRight, AiFillGithub } from "react-icons/ai";
import { GoLink } from "react-icons/go";

function FitnessHouston(){
    const imageFiles = [
        "FitnessHouston_Main.png",
        "FitnessHouston_Machine.png",
        "FitnessHouston_Announcement.png",
        "FitnessHouston_Map.png",
        "FitnessHouston_Login.png",
        "FitnessHouston_Logout.png",
    ]
    const explain = [
        "메인 페이지",
        "기구 소개",
        "공지사항",
        "지도",
        "로그인",
        "로그아웃",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const PreviousSlide = () => {
        const newIndex = currentIndex === 0? imageFiles.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const NextSlide = () => {
        const newIndex = currentIndex === imageFiles.length - 1? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return(
        <div className="FitnessHouston">
            <div className="FitnessHouston_container">
                <div className="project_title">
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <span>프로젝트 2</span>
                        <span style={{fontSize: '1rem'}}>( 3인 팀 프로젝트 )</span>
                    </div>
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <span>Fitness Houston</span>
                    </div>
                </div>
                <div className="project_main">
                    <div className="project_img_container">
                        <div className="project_img_box">
                            {imageFiles.map((imageName, index) => (
                                <img 
                                    key={index}
                                    style={{
                                        width: '100%', height: '100%',
                                        display: index === currentIndex? 'block': 'none'
                                    }}
                                    src={process.env.PUBLIC_URL + `/Imgs/Fitness Houston/${imageName}`}
                                    alt={`FitnessHouston ${index + 1}`}
                                />
                            ))}
                            {explain.map((explainText, index) => (
                                <span
                                    key={index}
                                    className="explain"
                                    style={{
                                        display: index === currentIndex? 'block': 'none'
                                    }}
                                >
                                    {explainText}
                                </span>
                            ))}
                        </div>
                        <div className="slider_controller">
                            <AiOutlineLeft className="left_icon" onClick={PreviousSlide}/>
                            <span>{`${currentIndex + 1} / ${imageFiles.length}`}</span>
                            <AiOutlineRight className="right_icon" onClick={NextSlide}/>
                        </div>
                    </div>
                    <div className="project_text_container">
                        <span>Fitness Houston는 가상의 헬스 브랜드 홈페이지 프로젝트입니다.<br/>Fitness + Whitney Houston의 합성어로,<br/>유명 가수 휘트니 휴스턴처럼 유명해졌으면 하는 바람으로 가상 브랜드명으로 선택했습니다.</span>
                        <br/>
                        <span>Fitness Houston은 리액트를 활용한 웹 프로젝트입니다.</span>
                        <span>기존의 '짐박스'라는 헬스 브랜드를 기반으로,<br/>'메가커피', '한샘몰' 등 여러 사이트 들의 디자인, 기능들을 참고하여<br/>저희 팀이 새롭게 만들어본 프로젝트입니다.</span>
                        <br/>
                        <span>제 역할은 공통부분인 헤더와 푸터를 제작하고, 공지사항과 지도 부분을 구현하였습니다.</span>
                        <br/>
                        <span>지도 부분은 카카오 맵 API를 사용했으며,</span>
                        <span>공지사항 글 관리 및 회원관리에 사용한 DB는 MongoDB를 사용했고,</span>
                        <span>백엔드 배포는 cloudtype을 사용했습니다.</span>

                        <div className="icon_box">
                            <div className="tech_stack">
                                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html"/>
                                <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css"/>
                                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript"/>
                            </div>
                            <div className="tech_stack">
                                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react"/>
                                <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" alt="mongodb"/>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
                                <span className="icon_explain">URL</span>
                                <a href="https://seongbinbin.github.io/Fitness_Houston/" target="_blank" rel="noopener noreferrer" className="icon_box_icon"><GoLink size={25}/></a>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
                                <span className="icon_explain">GitHub</span>
                                <a href="https://github.com/SeongBinBin/Fitness_Houston" target="_blank" rel="noopener noreferrer" className="icon_box_icon"><AiFillGithub size={30}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FitnessHouston