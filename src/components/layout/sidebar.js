import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { authUser, loggedIn} from '../auth'




function sidebar(props) {
   /* const GetUserName = () =>{
    let UserName = `${authUser.data.firstname} ${authUser.data.lastname}`;
     return  UserName
    }*/


    
             
     
  

   
    return (
        <aside className="col-md-2 d-none d-md-block bg-light sidebar" style={{width:'20%', height:'100vh', float:'left', paddingTop:'100px'}}  >
        <div className="sidebar-stick"  >
        <ul className="nav flex-column">
        {/*
            loggedIn() === false ? null :
            <li className="nav-item">
          <Link className="nav-link pb-5" to="#">
                <h3 className='text-center'>Hi, {loggedIn === true ? 
                    `${authUser.data.firstname} ${authUser.data.lastname}`:
                    null}
                </h3>
                </Link> 
          </li>*/
            }

            
          
          
          <li className="nav-item pb-3">
          <Link className="nav-link text-center" to="/dashboard">
                 Home
                </Link>
          </li>
          <li className="nav-item pb-3">
          <Link className="nav-link text-center" to="/dashboard/myposts">
                 My Posts
                </Link>
          </li>

          <li className="nav-item pb-3">
          <Link className="nav-link text-center" to="/dashboard/createEmployee">
          Create Employee
                </Link>
          </li>
         
          <li className="nav-item pb-3 text-center">
          <Link className="nav-link text-center" to="/dashboard/postarticle">
               Add Article
               </Link>
          </li>
          <li className="nav-item pb-3 text-center">
          <Link className="nav-link" to="/dashboard/postgif">
                Add Gif
                </Link>
          </li>
          <li className="nav-item pb-3 text-center">
          <Link className="av-link" onClick={props.logOut} to="#">
                
               
                Logout
                </Link>
            </li>
        </ul>

        </div>
    </aside>
        
    )

   
}
//Proptypes
sidebar.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired
 
}


export default withRouter(sidebar);
