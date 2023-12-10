import React from 'react'
import './v_fund.css'
import Sign_search_2 from './Sign_search_2'
import dance_club from '../assets/dance_club_logo.png'

function Dance_club() {
    return (
        <div className='v_fund_contanier'>
            <Sign_search_2 />
            <div className='v_fund_box'>
                <div className='v_fund_info'>
                    <div className='v_fund_title'>Alatoo - dance</div>
                    <div className='v_fund_text'>Alatoo - dance - это молодой танцевальный клуб колледжа. Наши танцоры радуют студентов Алатоо своими яркими и креативными выступлениями на всех мероприятиях. Целью клуба является пропаганда всех народных танцев. Он занимается не только постановкой танца, но так же и обучением желающих. Уже не первый год, наш клуб продолжает удивлять своих поклонников.</div>
                </div>
                <div className='v_fund_logo'>
                    <img src={dance_club} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Dance_club
