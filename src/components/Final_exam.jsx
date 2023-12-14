import React from 'react'
import './midterm_exam.css'
import Sign_search_2 from './Sign_search_2'

function Final_exam() {return (
        <div className='midterm_container'>
            <Sign_search_2 />
            <div className='midterm_box'>
                <div className='midterm_title'>Финальные экзамены</div>
                <div className='midterm_info'>
                Final exam на сайте <br />
                Гугл таблица с расписанием
                </div>
            </div>
        </div>
    )
}

export default Final_exam
