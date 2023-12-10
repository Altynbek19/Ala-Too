import React from "react";
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../assets/logo.png'
import burger from '../../assets/burger-menu.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to='/'>
                    
                    <img className="header-logo" src={logo} alt="" />
    
                </Link>
                <div className="header-buttons">
                    <div className="header-button-container">
                            <div className="header-button">
                                КОЛЛЕДЖ
                            </div>
                        <div className="dropdown-content">
                            <a href="#">О колледже</a>
                            <Link to='/mission'>Миссия</Link>
                            <a href="#">Проверка диплома</a>
                        </div>
                    </div>
                    <div className="header-button-container">
                            <div className="header-button">
                                ПРОФЕССИИ
                            </div>
                        <div className="dropdown-content">
                            <Link to="/computer">Компьютерные системы и комплексы</Link>
                            <Link to='/econom'>Экономика и бухгалтерский отчет</Link>
                            <Link to='/marketing'>Маркетинг</Link>
                            <Link to='/povtas'>Программное обеспечение вычислительной техники</Link>
                            <Link to='/design'>Дизайн</Link>
                        </div>
                    </div>
                    <div className="header-button-container">
                            <div className="header-button">
                            СТУДЕНТ
                            </div>
                        <div className="dropdown-content">
                            <a href="#">Формы</a>
                            <a href="#">Мидтерм экзамены</a>
                            <a href="#">Финальные экзамены</a>
                            <a href="#">Пересдача</a>
                        </div>
                    </div>
                    <div className="header-button-container">
                            <div className="header-button">
                            СТУДЕНЧЕСКИЕ КЛУБЫ
                            </div>
                        <div className="dropdown-content">
                            <Link to='/stud_sovet'>Студенческий совет</Link>
                            <Link to='/v_fund'>V-Fund</Link>
                            <Link to='/dance_club'>Alatoo - dance</Link>
                            <Link to='/music_club'>Music club</Link>
                            <Link to='/sport_club'>Спортивный клуб</Link>
                        </div>
                    </div>
                    <div className="header-button-container">
                            <div className="header-button">
                            ПОСТУПАЮЩИМ
                            </div>
                        <div className="dropdown-content">
                            <a href="#">Как поступить</a>
                            <a href="#">Академический календарь</a>
                        </div>
                    </div>
                    <div className="header-button">
                    КОНТАКТЫ
                    </div>
                </div>
                    <div className="burger">
                        <img src={burger} alt="" />
                    </div>
            </div>
        </header>
    )
}