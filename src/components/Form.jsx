import React from 'react'
import './form.css'
import Sign_search_2 from './Sign_search_2'
import form_1 from '../assets/form_1.png'
import form_2 from '../assets/form_2.png'

function Form() {
    return (
        <div className='form_container'>
            <Sign_search_2 />
            <div className='form_box'>
            <div className='form_title'>Формы</div>
                <div className='form_info_img'>
                    <div className='form_info'>
                        <div className='form_in_tech'>
                            <div className='form_info_main_title'>Практика по техническому отделению</div>
                            <div className='form_info_box'>
                                <div className='form_info_title'>Ознакомительная практика</div>
                                <div className='form_info_text'>
                                    Анкета работодателя <br />
                                    Дневник ознакомительной практики <br />
                                    Отчет ознакомительной практики
                                </div>
                            </div>
                            <div className='form_info_box'>
                                <div className='form_info_title'>Производственная практика</div>
                                <div className='form_info_text'>
                                    Анкета работодателя <br />
                                    Дневник производственной практики <br />
                                    Отчет производственная практика
                                </div>
                            </div>
                            <div className='form_info_box'>
                                <div className='form_info_title'>Квалификационная практика</div>
                                <div className='form_info_text'>
                                    Анкета работодателя <br />
                                    Дневник квалификационной практики <br />
                                    Отчет квалификационной практики
                                </div>
                            </div>
                        </div>
                        <div className='form_in_econom'>
                            <div className='form_info_main_title'>Практика по экономическому отделению</div>
                            <div className='form_info_box'>
                                <div className='form_info_title'>Квалификационная практика</div>
                                <div className='form_info_text'>
                                    Анкета работодателя <br />
                                    дневник квалификационная практика <br />
                                    Отчет квалификационная практика
                                </div>
                            </div>
                            <div className='form_info_box'>
                                <div className='form_info_title'>Ознакомительная практика</div>
                                <div className='form_info_text'>
                                    Анкета работодателя <br />
                                    Дневник ознакомительной практики <br />
                                    Отчет ознакомительной практики
                                </div>
                            </div>
                            <div className='form_info_box'>
                                <div className='form_info_title'>Производственная практика</div>
                                <div className='form_info_text'>
                                    Анкета работодателя <br />
                                    Дневник производственная практика <br />
                                    Отчет производственная практика
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form_img'>
                        <img src={form_1} alt="" />
                        <img src={form_2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
