import React from 'react'

export default function Hero({actors,removeActors}) {

    return (
        <div className="d-flex justify-content-between widthContent">
            <h2 className="border border-secondary rounded pl-3 pr-3 bg-light">
            {actors.name}
            </h2>
            <button type="submit" className="m-1 btn btn-danger" onClick={() => removeActors(actors.name)}>X</button>
        </div>
    )
}
