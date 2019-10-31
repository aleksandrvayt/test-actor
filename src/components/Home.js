import React from 'react'
import actors from '../actors.jpg'

export default function Home() {
    return (
        <div>
            <img src={actors} className="image" alt="actors"/>
        </div>
    )
}
