import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'



function Header() {
    return (
        
       <nav className="navbar navbar-dark bg-dark">
        <Link className='nav'  to="/dashboard">
            <img className=" navbar-brand" src="https://res.cloudinary.com/oluwamayowaf/image/upload/v1574283398/TeamWorkFE/teamwork_fvc2kr.svg" alt="logo" />
        </Link>
        </nav>
    )
}

export default Header;
