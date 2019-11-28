import React from 'react'

export default function comment(props) {
    return (
        <div>
            <div className='col'>
                <p key={props.id}>{props.comment}</p>
               
            </div>
            
        </div>
    )
}
