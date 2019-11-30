import React from 'react';
import LoginForm from './loginForm';
import Welcome from './welcome';
import {Redirect} from 'react-router-dom';
import { loggedIn }   from '../../auth';


export default function login() {

  
    return (
        <div className="container-fluid ">
      
            <div className="row Main-login">
            {
            loggedIn() === true ? 
             <Redirect to="/dashboard" />
            : null
            }
            <div className="col-lg-3">
                </div>
                <div className ="col-lg-3 Login-form-container  ">
                    <LoginForm />
                </div>
                <div className="col-lg-3 Welcome-message-container " >
                    <Welcome />
                </div>
                <div className="col-lg-3">
                </div>     
            </div>
        </div>
    )
}
