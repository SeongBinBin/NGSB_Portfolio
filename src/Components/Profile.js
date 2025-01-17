import React from "react";
import '../Style/Profile.css'

import { MdLocalPhone, MdOutlineDateRange } from "react-icons/md";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

function Profile(){
    return(
        <div className="Profile_container">
            <div className="self_introduction">
                <div className="name_card_img">
                    {/* 사진 */}
                    <img src={process.env.PUBLIC_URL + `/Imgs/취업사진.png`} alt="profile_picture"/>
                </div>
                <div className="self_confidence">
                    <span>한결같은 개발자가 되고 싶은 남궁성빈입니다.</span>
                    <br/>
                    {/* <span>학력 - 우송대학교 컴퓨터 정보·보안 전공 졸업</span> */}
                    <span>우송대학교 컴퓨터 정보·보안 전공을 졸업하고</span>
                    <span>직업훈련을 통해 프론트엔드 교육을 받았습니다.</span>
                    <span>Javascript, React, React Native를 활용한 프로젝트를 진행해 보았고,</span>
                    <span>개인 프로젝트와 팀 프로젝트를 모두 진행했습니다.</span>
                    <span>항상 꼼꼼한 개발자가 되겠습니다.</span>
                </div>
                <a href="https://github.com/SeongBinBin" target="_blank" rel="noopener noreferrer" className="name_card_info_icon"><AiFillGithub size={40}/></a>
            </div>

            <div className="profile_info_area">
                <div className="name_card_area">
                    <span>Contact</span>
                    <div className="name_card_info">
                        {/* <div className="name_card_info_box">
                            <span className="name_card_info_icon"><AiOutlineUser size={25}/></span>
                            <span className="name_card_info_text">남궁성빈</span>
                        </div> */}
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><MdLocalPhone size={25}/></span>
                            <span className="name_card_info_text">010-5310-9717</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><AiOutlineMail size={25}/></span>
                            <span className="name_card_info_text">k971711@naver.com</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><GrLocation size={25}/></span>
                            <span className="name_card_info_text">대전광역시 대덕구</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><MdOutlineDateRange size={25}/></span>
                            <span className="name_card_info_text">1997. 07. 28</span>
                        </div>
                    </div>
                </div>

                <div className="profile_tech_stack">
                    <span className="profile_tech_stack_title">기술 스택</span>
                    <div className="tech_stack_category">
                        <span>언어</span>
                        <div>
                            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript"/>
                        </div>
                    </div>
                    <div className="tech_stack_category">
                        <span>프론트엔드</span>
                        <div>
                            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
                            <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css"/>
                            <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass"/>
                            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
                            <img src="https://img.shields.io/badge/React native-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native"/>
                        </div>
                    </div>
                    <div className="tech_stack_category">
                        <span>백엔드</span>
                        <div>
                            <img src="https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
                        </div>
                    </div>
                    <div className="tech_stack_category">
                        <span>데이터베이스</span>
                        <div>
                            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" alt="MongoDB"/>
                            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase"/>
                        </div>
                    </div>
                    <div className="tech_stack_category">
                        <span>툴</span>
                        <div>
                            <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" alt="github"/>
                            <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="notion"/>
                            <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="figma"/>
                            <img src="https://img.shields.io/badge/Cloudetype-99CCFF?style=for-the-badge&logo=Cloudetype&logoColor=white" alt="Cloudetype"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile