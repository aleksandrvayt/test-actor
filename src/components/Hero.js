import React from 'react'

export default function Hero({actors,removeActors}) {

    return (
        <div className="d-flex justify-content-between widthContent">
            <h2>
            {actors.name}
            </h2>
            <button type="submit" className="m-1" onClick={() => removeActors(actors.name)}>X</button>
        </div>
    )
}
