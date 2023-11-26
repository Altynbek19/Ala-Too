import React from 'react'
import design_1 from '../assets/design_1.png'
import design_2 from '../assets/design_2.png'
import Sign_search_2 from './Sign_search_2'
import './computer.css'
import './econom.css'


function Design() {
    return (
        <div className='computer_container'>
            <Sign_search_2 />
            <div className='computer'>
                <div className='computer_main_title'>Дизайн</div>
                <div className='computer_boxes'>
                    <div className='computer_box'>
                        <div className='computer_title'>О специальности</div>
                        <div className='computer_text_img'>
                            <div className='computer_img'>
                                <img src={design_1} alt="" />
                            </div>
                            <div className='computer_text'>
                            Специальность "Веб-дизайн"  охватывает изучение проектирования веб-сайтов и веб-приложений, используя различные инструменты и технологии.
Студенты изучают основы веб-дизайна, включая цветовую схему, типографику, композицию, визуальную и пользовательскую навигацию и оптимизацию контента для поисковых систем. Они также могут изучать различные языки и технологии веб-разработки, такие как HTML, CSS, JavaScript и другие.

                            </div>
                        </div>
                    </div>
                    <div className='computer_box'>
                        <div className='computer_title'>При выпуске вы будете обладать такими навыками как:</div>
                        <div className='computer_text_img'>
                            <div className='econom_text'>
                                <div className='econom_text_1'>
                                2Д анимирование <br />
                                3Д анимирование <br /> 
                                Видеомонтаж <br />
                                Редактирование фотографий <br />
                                Дизайн упаковки <br />
                                Многостраничный дизайн <br />
                                Интерактивный дизайн <br />
                                Дизайн игр <br /> 
                                Цифровое рисование <br />


                                </div>
                                <div className='econom_text_2'>
                                    <div className='econom_title'>Практика студентов</div>
                                    <div className='econom_text_2_text'>
                                    В период обучения студенты специальности “Дизайн” пройдут обязательную учебно-ознакомительную,производственную и квалификационную практику
                                    </div>
                                </div>
                            </div>
                            <div className='computer_img'>
                                <img src={design_2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
