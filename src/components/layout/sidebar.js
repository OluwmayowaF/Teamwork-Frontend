import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';




function sidebar(props) {

    
    return (
        <div>
            <nav className="sidenav">
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'16px',fontWeight:'300', textDecoration:'none'}} to="/dashboard/createEmployee">
   
               
                Create<br /> Employee
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'16px', fontWeight:'300', textDecoration:'none'}} to="/dashboard/postarticle">
               
               
                Add Article
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'18px',fontWeight:'300', textDecoration:'none'}} to="/dashboard/gif">
                
               
                Add Gif
                </Link>
                </div>
                <div style={{ marginBottom:'50px'}}>
                <Link style={{color:"#fff", fontSize:'18px', fontWeight:'300', textDecoration:'none'}} onClick={props.logOut} to="#">
                
               
                Logout
                </Link>
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
