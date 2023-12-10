import React from 'react'
import './v_fund.css'
import Sign_search_2 from './Sign_search_2'
import sport_club from '../assets/sport_club_logo.png'

function Sport_club() {
    return (
        <div className='v_fund_contanier'>
            <Sign_search_2 />
            <div className='v_fund_box'>
                <div className='v_fund_info'>
                    <div className='v_fund_title'>Спортивный клуб</div>
                    <div className='v_fund_text'>
                    Спортивный клуб - в IT&Bussiness колледже расположены футбольное поле и поля для баскетбола,волейбола и тенниса, а также зал для занятий всеми видами борьбы. Благодаря этим условиям в колледже имеются различные секции борьбы и других видов спорта. Ежегодно наши студенты показывают хорошие результаты занимая призовые места на универсиадах.
                    Список спортивных клубов: <br />
                    Шахмат <br />
                    Тогуз коргоол <br />
                    Плавание <br />
                    Теннис <br />
                    Ордо <br />
                    Греко-римская и вольная борьба <br />
                    Волейбол <br />
                    Баскетбол <br />
                    Футбол <br />
                    Дзюдо
                    </div>
                </div>
                <div className='v_fund_logo'>
                    <img src={sport_club} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sport_club
