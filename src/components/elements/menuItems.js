import React from 'react';
import {Link} from 'react-router-dom';
import {authUser, loggedIn} from '../auth';

export default function menuItems(props) {
    return (
        <div>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
                 Home
                </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/dashboard/myposts">
                 My Posts
                </Link>
          </li>
         
          {
                authUser.data.role === 'admin' ?
                <li className="nav-item">
                <Link className="nav-link" to="/dashboard/createEmployee">
                Create Employee
                </Link>
                </li>: null

                }
         
          <li className="nav-item">
          <Link className="nav-link" to="/dashboard/postarticle">
               
               
               Add Article
               </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/dashboard/postgif">
                
               
                Add Gif
                </Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link" onClick={props.logout} to="#">
                
                Logout
                </Link>
            </li>
            
        </div>
    )
}
