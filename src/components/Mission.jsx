import React from 'react'
import mission from '../assets/mission.png'
import './mission.css'
import Sign_search_2 from './Sign_search_2'

function Mission() {
    return (
        <div className='mission_container'>
        <Sign_search_2 />
            <div className='mission'>
                <div className='mission_1'>
                    <div className='mission_text_box '>
                        <div className='mission_text_title'>Миссия</div>
                        <div className='mission_text'>Миссия колледжа – подготовка  знающих исторические ценности, разносторонних, обладающих 
                            критическим мышлением, способных быстро адаптироваться к меняющимся новаторским условиям,
                            творческих специалистов, сочетающих знания и действия, способных успешно работать по всему миру.</div>
                    </div>
                    <div className='mission_img_box'>
                        <img src={mission} alt="" />
                    </div>
                </div>
                <div className='mission_2'>При подготовке специалистов колледж развивает мировые ценности, в соответствии с национальными ценностями, информационные технологии, инновационные методы, исследования. Как международный колледж страны, он делает все возможное, чтобы способствовать развитию общества в области науки, образования и инноваций.</div>
            </div>
        </div>
    )
}

export default Mission
