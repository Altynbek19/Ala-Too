import React from 'react'
import logo_tud_sovet from '../assets/logo_stud_sovet.png'
import stud_sovet_1 from '../assets/stud_sovet_1.png'
import stud_sovet_2 from '../assets/stud_sovet_2.png'
import stud_sovet_3 from '../assets/stud_sovet_3.png'
import Sign_search_2 from './Sign_search_2'
import './stud_sovet.css'

function Stud_sovet() {
    return (
        <div className='stud_container'>
            <Sign_search_2 />
            <div className='stud_box'>
                <div className='stud_1_part'>
                    <div className='stud_info'>
                        <div className='stud_title'>Студенческий совет</div>
                        <div className='stud_text'>Студенческий совет - это золотой мост между студентами и администрацией. Клуб занимается организацией различных мероприятий, таких как фестивали, концерты, спортивные турниры, и другие мероприятия, которые помогают создать активную и дружественную обстановку в колледже. Также, студенческий совет - это организация, существующая исключительно на энтузиазме ее участников, которые сами задают цели, ставят задачи, находят пути их решения и достигают желаемых результатов.</div>
                    </div>
                    <div className='stud_logo'>
                        <img src={logo_tud_sovet} alt="" />
                    </div>
                </div>
                <div className='stud_sovet_img'>
                    <img src={stud_sovet_1} alt="" />
                    <img src={stud_sovet_2} alt="" />
                    <img src={stud_sovet_3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Stud_sovet
