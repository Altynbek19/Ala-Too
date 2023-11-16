import React from 'react'
import econom_1 from '../assets/econom_1.png'
import econom_2 from '../assets/econom_2.png'
import Sign_search_2 from './Sign_search_2'
import './computer.css'
import './econom.css'

function Econom() {
    return (
        <div className='computer_container'>
            <Sign_search_2 />
            <div className='computer'>
                <div className='computer_main_title'>Экономика и бухгалтеский учет</div>
                <div className='computer_boxes'>
                    <div className='computer_box'>
                        <div className='computer_title'>О специальности</div>
                        <div className='computer_text_img'>
                            <div className='computer_img'>
                                <img src={econom_1} alt="" />
                            </div>
                            <div className='computer_text'>
                                Специальность "экономика и бухгалтерский учет" объединяет изучение основ экономической теории, анализа экономических данных и принципов бухгалтерского учета. В рамках этой специальности студенты изучают микро- и макроэкономику, методы анализа финансовых отчетов, бюджетирование, налоговый учет, управленческий учет, аудит и другие темы, связанные с финансовым управлением и бизнесом.
                            </div>
                        </div>
                    </div>
                    <div className='computer_box'>
                        <div className='computer_title'>При выпуске вы будете обладать такими навыками как:</div>
                        <div className='computer_text_img'>
                            <div className='econom_text'>
                                <div className='econom_text_1'>
                                Бухгалтерский учёт <br />
                                Документационное обеспечение управления <br />
                                Бизнес-планирование <br />
                                Страховое дело <br />
                                Налоги и налогообложение <br />
                                Основы банковского дела <br />
                                Международные стандарты финансовой отчётности <br />
                                Основы менеджмента <br />
                                Основы маркетинга

                                </div>
                                <div className='econom_text_2'>
                                    <div className='econom_title'>Практика студентов</div>
                                    <div className='econom_text_2_text'>
                                    В период обучения студенты специальности <br /> “Экономика и бухгалтерский учет” пройдут <br /> обязательную учебно- <br /> ознакомительную,производственную и <br /> квалификационную практику
                                    </div>
                                </div>
                            </div>
                            <div className='computer_img'>
                                <img src={econom_2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Econom
