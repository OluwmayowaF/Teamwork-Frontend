import React from 'react';
import { Link } from 'react-router-dom';


export default function sidebar(props) {

    const logOut = () => {
        localStorage.removeItem('user');
        console.log('Session Ended')
    }
    return (
        <div>
            <nav className="sidenav">
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'16px',fontWeight:'300', textDecoration:'none'}} to="#">
   
               
                Create<br /> Employee
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'16px', fontWeight:'300', textDecoration:'none'}} to="#">
               
               
                Add Article
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'18px',fontWeight:'300', textDecoration:'none'}} to="#">
                
               
                Add Gif
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'18px', fontWeight:'300', textDecoration:'none'}} onClick={logOut} to="#">
                
               
                Logout
                </Link>
                </div>

            </nav>
            
        </div>
    )
}
