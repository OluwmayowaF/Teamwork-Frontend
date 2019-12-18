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
       <img src="https://res.cloudinary.com/oluwamayowaf/image/upload/v1575360443/TeamWorkFE/fab_1_wcy4pg.svg" alt="myPosts" style={{paddingRight:'10px' }}/>
       <img src="https://res.cloudinary.com/oluwamayowaf/image/upload/v1575360115/TeamWorkFE/fab_lbkxwv.svg" alt="addPost"/>
       </div>: props.HeaderIcon
       }
        </nav>
    )
}

export default Header;
