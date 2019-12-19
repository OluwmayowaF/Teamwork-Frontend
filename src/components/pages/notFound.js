import React from 'react';
import Sidebar from '../layout/Sidebar';
import {Link } from 'react-router-dom'


export default function notFound(props) {
    return (
        <React.Fragment>
        <Sidebar logOut={props.logOut} UserName={props.UserName} />
            <div className='compContainer'>
                <div className='errorPage'>
                    <img  classname='m-b-5' src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1576774869/TeamWorkFE/404_gyopqn.svg' alt='404'/>
                    <p>Opps. looks like you found a <br /> sad page.</p>
                    <Link to='/dashboard'><button className='errorBtn' > Go to Home page</button></Link>
                </div>

            </div>
        </React.Fragment>
    )
}
