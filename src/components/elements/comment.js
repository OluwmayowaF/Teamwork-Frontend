import React from 'react'

export default function comment(props) {
    return (
        <div>
            <div className='articleContainer'>
                <p key={props.id}>{props.comment}</p>
               
            </div>
            
        </div>
    )
}
