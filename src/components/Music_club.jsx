import React from 'react'
import './v_fund.css'
import Sign_search_2 from './Sign_search_2'
import music_club from '../assets/Music_club_logo.png'

function Music_club() {
    return (
        <div className='v_fund_contanier'>
            <Sign_search_2 />
            <div className='v_fund_box'>
                <div className='v_fund_info'>
                    <div className='v_fund_title'>Music club</div>
                    <div className='v_fund_text'>Music club - клуб создан для развития творческого потенциала студентов. В колледже имеются различные виды музыкальных инструментов – от фортепиано до барабанной системы, на которых студенты могут практиковать свои навыки или учиться играть. А также они с радостью принимают участия во всех мероприятиях колледжа. В клубе студенты обмениваются опытом владения различными музыкальными инструментами.</div>
                </div>
                <div className='v_fund_logo'>
                    <img src={music_club} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Music_club
