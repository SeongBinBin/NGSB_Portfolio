import React from "react";
import '../Style/Profile.css'

import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

function Profile(){
    return(
        <div className="Profile_container">
            <span className="self_confidence"> ~ 프론트엔드 개발자입니다. </span>
            <div className="name_card">
                <div className="name_card_img">
                    사진
                </div>
                <div className="name_card_area">
                    <p className="name_card_text_title">Front-end Engineer</p>
                    <div className="name_card_info">
                        <div className="name_card_info_icon">
                            <span><AiOutlineUser /></span>
                            <span><MdLocalPhone /></span>
                            <span><AiOutlineMail /></span>
                            <span>주소지</span>
                            <span>생년월일</span>
                        </div>
                        <div className="name_card_info_text">
                            <span>남궁성빈</span>
                            <span>010-5310-9717</span>
                            <span>k971711@naver.com</span>
                            <span>대전광역시 대덕구</span>
                            <span>970728</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile