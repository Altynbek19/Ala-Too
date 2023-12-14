import React from 'react'
import './midterm_exam.css'
import Sign_search_2 from './Sign_search_2'

function Make_up() {
    return (
        <div className='midterm_container'>
            <Sign_search_2 />
            <div className='midterm_box'>
                <div className='midterm_title'>Пересдача</div>
                <div className='midterm_info'>
                Vocational Education, Fall Semester 2022, Make Up Schedule : Make Up Fall-2022
                </div>
            </div>
        </div>
    )
}

export default Make_up