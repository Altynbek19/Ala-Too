import React from 'react'
import search_2 from '../assets/search_2.png'
import './Sign_search_2.css'


function Sign_search() {
    return (
        <div className="h_sign_2">
            <div className="search_2">
                <input type="text" value='Поиск...'/>
                <img src={search_2} alt="" />
            </div>
            <div className="sign_button_2">ВОЙТИ</div>
        </div>
    )
}

export default Sign_search
