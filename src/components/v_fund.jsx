import React from 'react'
import './v_fund.css'
import Sign_search_2 from './Sign_search_2'
import v_fund from '../assets/V_fund_logo.png'

function V_fund() {
    return (
        <div className='v_fund_contanier'>
            <Sign_search_2 />
            <div className='v_fund_box'>
                <div className='v_fund_info'>
                    <div className='v_fund_title'>V-Fund</div>
                    <div className='v_fund_text'>V-Fund - благотворительный клуб, миссия которого заключается в помощи людям и себе, находить лучшие пути решения с минимальными усилиями и максимальным результатом, а также создавать текущую систему работы. Основная цель этого фонда, оказывать большую помощь и поддержку детским домам, школам-интернатам, домам для престарелых, и всем тем, кто в ней нуждается. Фонд также сотрудничает с аналогичными фондами такие как «Элим барсынбы?», Active Jugend, и совместно с ними создает и реализует масштабные проекты.</div>
                </div>
                <div className='v_fund_logo'>
                    <img src={v_fund} alt="" />
                </div>
            </div>
        </div>
    )
}

export default V_fund
