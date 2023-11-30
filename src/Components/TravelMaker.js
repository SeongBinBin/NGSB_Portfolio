import React, {useState} from "react";
import '../Style/TravelMaker.css'
import { AiOutlineLeft, AiOutlineRight, AiFillGithub } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

function TravelMaker(){
    const imageFiles = [
        "TravelMaker_Main.png",
        "TravelMaker_Map.png",
        "TravelMaker_Input.png",
        "TravelMaker_Calendar.png",
        "TravelMaker_Profile.png",
    ]
    const explain = [
        "메인 페이지",
        "지역 선택",
        "입력 화면",
        "캘린더 페이지",
        "프로필 페이지",
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
        <div className="TravelMaker">
            <div className="TravelMaker_container">
                <div className="project_title">
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <span>프로젝트 3</span>
                        <span style={{fontSize: '1rem'}}>( 2인 팀 프로젝트 )</span>
                    </div>
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <span>TravelMaker</span>
                    </div>
                </div>
                <div className="project_main">
                    <div className="project_img_container">
                        <div className="travelmaker_img_box">
                            {imageFiles.map((imageName, index) => (
                                <img 
                                    key={index}
                                    style={{
                                        width: '30%', height: '100%',
                                        display: index === currentIndex? 'block': 'none'
                                    }}
                                    src={process.env.PUBLIC_URL + `/Imgs/TravelMaker/${imageName}`}
                                    alt={`TravelMaker ${index + 1}`}
                                />
                            ))}
                            {explain.map((explainText, index) => (
                                <span
                                    className="travelmaker_explain"
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
                        <span>TravelMaker는 여행 다이어리 앱입니다.</span>
                        <span>기존의 지도 앱들은 장소 저장 기능에 간단한 메모 정도만 남길 수 있고,<br/>다이어리 앱들은 다이어리와 캘린더 기능 정도만 있는 앱들이 대부분입니다.</span>
                        <span>이 두 기능을 합쳐보고자 여행 다이어리 앱을 설계했습니다.</span>
                        <br/>
                        <span>TravelMaker는 리액트 네이티브를 활용한 앱 프로젝트입니다.</span>
                        <span>여행을 다녀온 후 지역을 선택하고, 기억하고자 하는 내용을 작성하면 위치와 기록이 저장되는 프로젝트입니다.</span>
                        <br/>
                        <span>저는 지도, 회원 관리, 프로필 부분 구현을 맡았습니다.</span>
                        <span>지도는 리액트에 카카오 맵 API를 활용해서 구현하고,<br/>웹뷰 기능을 사용해서 네이티브에서 사용했습니다.</span>
                        <span>회원가입 및 로그인 등의 회원 관리는 Firebase DB를 통해 관리하였습니다.</span>
                        <div className="icon_box">
                            <div className="tech_stack">
                                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react"/>
                                <img src="https://img.shields.io/badge/React native-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react"/>
                                <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white" alt="firebase"/>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
                                <span className="icon_explain">APK</span>
                                <a href="" target="_blank" rel="noopener noreferrer" className="icon_box_icon"><FiDownload size={25}/></a>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
                                <span className="icon_explain">GitHub</span>
                                <a href="https://github.com/SeongBinBin/TravelMaker" target="_blank" rel="noopener noreferrer" className="icon_box_icon"><AiFillGithub size={30}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TravelMaker