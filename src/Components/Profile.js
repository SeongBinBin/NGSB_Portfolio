import React from "react";
import '../Style/Profile.css'

import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

function Profile(){
    return(
        <div className="Profile_container">
            {/* <p> 깔끔하고 단단한 프론트엔드 개발자입니다. </p> */}
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
                        </div>
                        <div className="name_card_info_text">
                            <span>남궁성빈</span>
                            <span>010-5310-9717</span>
                            <span>k971711@naver.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile