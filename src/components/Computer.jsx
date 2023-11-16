import React from 'react'
import computer_1 from '../assets/computer_1.png'
import computer_2 from '../assets/computer_2.png'
import Sign_search_2 from './Sign_search_2'
import './computer.css'

function Computer() {
    return (
        <div className='computer_container'>
            <Sign_search_2 />
            <div className='computer'>
                <div className='computer_main_title'>Компьютерные системы и комплексы</div>
                <div className='computer_boxes'>
                    <div className='computer_box'>
                        <div className='computer_title'>О специальности</div>
                        <div className='computer_text_img'>
                            <div className='computer_img'>
                                <img src={computer_1} alt="" />
                            </div>
                            <div className='computer_text'>Техник по компьютерным системам выполняет разработку и производство программно-аппаратных комплексов, эксплуатирует 
                            и проводит техническое обслуживание компьютерных систем, занимается  техническим сопровождением и настройкой 
                            системы в целом, обеспечивает процесс защиты информации в программных комплексах компьютерных систем. Он 
                            проектирует цифровые устройства, проводит техобслуживание и ремонт компьютерных систем и комплексов, разрабатывает 
                            схемы компьютерных систем.
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
                                <img src={computer_2} alt="" />
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
