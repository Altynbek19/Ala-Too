import React from 'react'
import search from '../assets/search.png'
import { Link } from 'react-router-dom'
function Sign_search() {
    return (
        <div className="h_sign">
            <div className="search">
                <input type="text" value='Поиск...'/>
                <img src={search} alt="" />
            </div>
        <Link to='/authorization'>
                    
        
            <div className="sign_button">ВОЙТИ</div>
        </Link>
        </div>

    
    )
}

export default Sign_search
