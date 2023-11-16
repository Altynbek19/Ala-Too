import React from 'react'
import marketing_1 from '../assets/marketing_1.png'
import marketing_2 from '../assets/marketing_2.png'
import Sign_search_2 from './Sign_search_2'
import './computer.css'
import './econom.css'

function Marketing() {
    return (
        <div className='computer_container'>
            <Sign_search_2 />
            <div className='computer'>
                <div className='computer_main_title'>Маркетинг</div>
                <div className='computer_boxes'>
                    <div className='computer_box'>
                        <div className='computer_title'>О специальности</div>
                        <div className='computer_text_img'>
                            <div className='computer_img'>
                                <img src={marketing_1} alt="" />
                            </div>
                            <div className='computer_text'>
                                Специальность "маркетинг"  охватывает изучение основных принципов маркетинга и рекламы, анализа рынка и потребительского поведения, планирования маркетинговых кампаний, ценообразования, продвижения товаров и услуг, управления брендами и многое другое.
Студенты будут изучать методы и инструменты маркетинговых исследований, анализа конкурентной среды, создания маркетинговых стратегий, управления продуктовым ассортиментом и многие другие аспекты маркетинга.
                            </div>
                        </div>
                    </div>
                    <div className='computer_box'>
                        <div className='computer_title'>При выпуске вы будете обладать такими навыками как:</div>
                        <div className='computer_text_img'>
                            <div className='econom_text'>
                                <div className='econom_text_1'>
                                Менеджмент проектов
                                маркетинг в социальных сетях(СММ) <br />
                                Теория маркетинга <br />
                                Этика делового общения <br />
                                Логистика <br />
                                Финансы <br />
                                Исследование и разработка пользовательского интерфейса(UX/UI) <br />
                                Планирование бизнеса

                                </div>
                                <div className='econom_text_2'>
                                    <div className='econom_title'>Практика студентов</div>
                                    <div className='econom_text_2_text'>
                                        В период обучения студенты специальности “Маркетинг” пройдут обязательную учебно-ознакомительную,производственную и квалификационную практику
                                    </div>
                                </div>
                            </div>
                            <div className='computer_img'>
                                <img src={marketing_2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing
