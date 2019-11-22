import React from 'react';
import LoginForm from './loginForm';
import Welcome from './welcome';
import 'bootstrap/dist/css/bootstrap.css';

export default function login() {
    return (
        <div className="container-fluid ">
        
            <div className="row Main-login">
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
