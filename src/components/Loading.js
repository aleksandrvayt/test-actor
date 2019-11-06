import React from 'react'
import loader from '../loader.gif'

export default function Loading() {
    return (
        <div>
            <img src={loader} className="loading" alt="loader"/>
        </div>
    )
}
