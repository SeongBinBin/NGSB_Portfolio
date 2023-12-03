import React from "react";
import '../Style/Profile.css'

import { MdLocalPhone, MdOutlineDateRange } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

function Profile(){
    return(
        <div className="Profile_container">
            <div className="self_introduction">
                <div className="name_card_img">
                    사진
                </div>
                <div className="self_confidence">
                    <span>한결같은 프론트엔드 개발자가 되고싶은 남궁성빈입니다.</span>
                    <span>우송대학교 컴퓨터 정보·보안을 졸업하고</span>
                </div>
                <a href="https://github.com/SeongBinBin" target="_blank" rel="noopener noreferrer" className="name_card_info_icon"><AiFillGithub size={25}/></a>
            </div>
            <div className="name_card">
                <div className="name_card_area">
                    {/* <div className="name_card_info"> */}
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
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default Profile