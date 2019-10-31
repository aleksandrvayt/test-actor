import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-warning navHeight'>
            <h1>Навигация</h1>
            <Link 
            to='/'
            className="m-2"
            >
                Главная
            </Link>
            <Link 
            to='/actors'            
            >
                Актеры
            </Link>
        </div>
    )
}
