import React from 'react'
import search from '../assets/search.png'

function Sign_search() {
    return (
        <div className="h_sign">
            <div className="search">
                <input type="text" value='Поиск...'/>
                <img src={search} alt="" />
            </div>
            <div className="sign_button">ВОЙТИ</div>
        </div>
    )
}

export default Sign_search
