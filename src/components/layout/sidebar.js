import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { loggedIn }   from '../auth'




function sidebar(props) {

    
    return (
        <div>
        {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            
            <nav className="sidenav">
            <div style={{ marginBottom:'50px'}}>
               
                
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'16px', fontWeight:'300', textDecoration:'none'}} to="/dashboard/postarticle">
               
               
                Add Article
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'18px',fontWeight:'300', textDecoration:'none'}} to="/dashboard/postgif">
                
               
                Add Gif
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'18px', fontWeight:'300', textDecoration:'none'}} onClick={props.logOut} to="#">
                
               
                Logout
                </Link>
                </div>
</div>
            </nav>
            
        </div>
    )

   
}
//Proptypes
sidebar.propTypes = {
    logOut: PropTypes.func.isRequired
 
}


export default withRouter(sidebar);
