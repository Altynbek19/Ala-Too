import React from 'react'
import './midterm_exam.css'
import Sign_search_2 from './Sign_search_2'

function Midterm_exam() {
    return (
        <div className='midterm_container'>
            <Sign_search_2 />
            <div className='midterm_box'>
                <div className='midterm_title'>Мидтерм экзамен</div>
                <div className='midterm_info'>
                Mid-term examination VS : Midterm Fall Semester - 2022-2023 <br />
                Гугл таблица с расписанием
                </div>
            </div>
        </div>
    )
}

export default Midterm_exam
