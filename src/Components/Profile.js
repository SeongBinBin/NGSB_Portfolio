import React from "react";
import '../Style/Profile.css'

import { MdLocalPhone, MdOutlineDateRange } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

function Profile(){
    return(
        <div className="Profile_container">
            <span className="self_confidence"> 한결같은 프론트엔드 개발자입니다. </span>
            <div className="name_card">
                <div className="name_card_img">
                    사진
                </div>
                <div className="name_card_area">
                    <p className="name_card_text_title">Front-end Engineer</p>
                    <div className="name_card_info">
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><AiOutlineUser size={20}/></span>
                            <span className="name_card_info_text">남궁성빈</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><MdLocalPhone size={20}/></span>
                            <span className="name_card_info_text">010-5310-9717</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><AiOutlineMail size={20}/></span>
                            <span className="name_card_info_text">k971711@naver.com</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><GrLocation size={20}/></span>
                            <span className="name_card_info_text">대전광역시 대덕구</span>
                        </div>
                        <div className="name_card_info_box">
                            <span className="name_card_info_icon"><MdOutlineDateRange size={20}/></span>
                            <span className="name_card_info_text">1997. 07. 28</span>
                        </div>
                        <div className="name_card_info_box">
                            <a href="https://github.com/SeongBinBin" target="_blank" rel="noopener noreferrer" className="name_card_info_icon"><AiFillGithub size={25}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile