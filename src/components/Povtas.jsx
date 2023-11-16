import React from 'react'
import povtas_1 from '../assets/povtas_1.png'
import povtas_2 from '../assets/povtas_2.png'
import Sign_search_2 from './Sign_search_2'
import './povtas.css'

function Computer() {
    return (
        <div className='computer_container'>
            <Sign_search_2 />
            <div className='computer'>
                <div className='computer_main_title'>Программное обеспечение вычислительной техники</div>
                <div className='computer_boxes'>
                    <div className='povtas_box'>
                        <div className='povtas_title'>О специальности</div>
                        <div className='computer_text_img'>
                            <div className='computer_img'>
                                <img src={povtas_1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='computer_box'>
                        <div className='computer_title'>При выпуске вы будете обладать такими навыками как:</div>
                        <div className='computer_text_img'>
                            <div className='computer_text'>Установка и конфигурирование электронных устройств
                            Алгоритмизация и основы программирования
                            База данных
                            Фронтенд(HTML, CSS, JS, React, Firebase)
                            Бэкенд(Python, Jango)
                            Мобильная разработка(android, IOS)
                            Кибербезопасность
                            Техническое обслуживание и ремонт компьютерных систем
                            3Д дизайн
                            </div>
                            <div className='computer_img'>
                                <img src={povtas_2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='computer_box'>
                        <div className='computer_title'>Практика студентов</div>
                        <div className='last_computer_text'>В период обучения студенты специальности “Компьютерные системы и комплексы” пройдут обязательную учебно-ознакомительную,производственную и квалификационную практику</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Computer
