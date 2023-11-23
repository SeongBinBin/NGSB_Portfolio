import React from "react";
import '../Style/Profile.css'

import { MdLocalPhone } from "react-icons/md";
import { AiOutlineGithub, AiOutlineMail, AiOutlineUser } from "react-icons/ai";

function Profile(){
    return(
        <div className="Profile_container">
            <div className="name_card">
                <div className="name_card_img">
                    
                </div>
                <div className="name_card_text">
                    <p className="name_card_text_title">Front-end Engineer</p>
                    <div className="name_card_text_info">
                        <div>
                            <AiOutlineUser />
                            <MdLocalPhone />
                            <AiOutlineMail />
                            <AiOutlineGithub />
                        </div>
                        <div>
                            <p>남궁성빈</p>
                            <p>010-5310-9717</p>
                            <p>k971711@naver.com</p>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile