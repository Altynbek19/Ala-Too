import React from "react";

import './welcome.css' 
import welcomeLeft from '../assets/welcome-left.png'
import welcomeImg1 from '../assets/welcome-right1.png'
import welcomeImg2 from '../assets/welcome-right2.png'
import Specialists from '../components/Specialists'
import PhotoCarousel from '../components/carousel';
import Footer from './Footer'
import Sign_search from './Sign_search'
import "./footer.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import inf from './../assets/inf.png'
import inf2 from './../assets/inf2.png'
import inf3 from './../assets/inf3.png'
import inf4 from './../assets/inf4.png'
import inf5 from './../assets/inf5.png'
import "./carousel.css"

export default function Welcome() {
    return (
            <div className="full_welcome">
                <div className="welcome_background">
                    <Sign_search />
                    <div className="welcome">
                        <div className="welcome-left">
                            <img src={welcomeLeft} alt="" />
                            <div className="left-button">
                                <div className="welcome-left-button">
                                    Узнать подробнее
                                </div>
                            </div>
                        </div>
                        <div className="welcome-right">
                            <div className="welcome-content">IT & Business College - это <br/> место, где вы можете <br/>начать свой путь к успеху!</div>
                            <div className="welcome-images">
                                <img src={welcomeImg1} alt="" className="welcome-img" />
                                <img src={welcomeImg2} alt="" className="welcome-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome_background_2">
                    <Specialists />
                    <PhotoCarousel/>
                </div>
                <Footer/>
            </div>
    )
}