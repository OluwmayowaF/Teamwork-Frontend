import React from 'react'

export default function gif(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.url} alt='gifImage'></img>
        </div>
    )
}
