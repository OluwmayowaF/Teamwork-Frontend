import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        
        <header className="App-header">
        <Link  to="/dashboard">
            <img src="https://res.cloudinary.com/oluwamayowaf/image/upload/v1574283398/TeamWorkFE/teamwork_fvc2kr.svg" alt="logo" />
            </Link>
        </header>
       
       
    )
}

export default Header;
