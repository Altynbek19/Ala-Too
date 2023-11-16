import React from "react";
import phone_icon from '../assets/icon_phone.png'
import email_icon from '../assets/icon_mail.png'
import instagram_icon from '../assets/icon_instagram.png'
import facebook_icon from '../assets/facebook_icon.png'
import youtube_icon from '../assets/icon_YouTube.png'
import icon_twitter from '../assets/icon_twitter.png'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer">
                    <div className="f_content_container">
                        <div className="f_contact_container">
                            <div className="f_contact">
                                <div>
                                    <img src={phone_icon} alt="" />
                                </div>
                                <div className="f_number">
                                    <div>+996 (312) 63 14 25</div>
                                    <div>+996 (555) 25 07 03</div>
                                    <div>+996 (505) 25 07 03</div>
                                </div>
                            </div>
                            <div className="f_email">
                                <div><img src={email_icon} alt="" /></div>
                                <div>college@alatoo.edu.kg</div>
                            </div>
                        </div>
                        <div className="f_info">
                            <div className="f_college">
                                <div>КОЛЛЕДЖ</div>
                                <div>ПРОФЕССИИ</div>
                                <div>СТУДЕНЧЕСКИЕ КЛУБЫ</div>
                            </div>
                            <div className="f_students">
                                <div>СТУДЕНТ</div>
                                <div>ПОСТУПАЮЩИМ</div>
                                <div>КОНТАКТЫ</div>
                            </div>
                        </div>
                    </div>
                        <div className="f_image">
                            <img src={instagram_icon} alt="" />
                            <img src={facebook_icon} alt="" />
                            <img src={youtube_icon} alt="" />
                            <img src={icon_twitter} alt="" />
                        </div>
                    </div>
        </div>
    )
}