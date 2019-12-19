import React from 'react'

export default function user(props) {
    return (
        <div className='userTab'>
        <button className=' avatar  mr-3'> {`${props.firstname}`.charAt(0)}</button>
        <h6 className='text-dark center p-2 '>{props.firstname} {props.lastname} <br/><p> {props.gender}</p> </h6>
        </div>
    )
}
