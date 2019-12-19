import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'



function Header(props) {
    return (
        
       <nav className="navbar headerMain ">
       <div className='nav-item'>
           {props.pageTitle}
       </div>
       {
        props.HeaderIcon == null ?
       <div className='nav-item'> 
       <Link to="/dashboard/postarticle">
       <button className='headerAddBtn'> + </button>
       </Link>
       <button className='headerBtn'>{props.buttonText}</button>
       </div>: props.HeaderIcon
       }
        </nav>
    )
}

export default Header;
