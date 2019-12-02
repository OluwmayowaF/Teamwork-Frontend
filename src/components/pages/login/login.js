import React from 'react';
import LoginForm from './loginForm';
import LoginHeader from '../../layout/LoginHeader'
import {Redirect} from 'react-router-dom';
import { loggedIn }   from '../../auth';
import Footer from '../../layout/Footer'


export default function login(props) {

  
    return (
        <div className="loginMain" >
        {
            loggedIn() === true ? 
             <Redirect to="/dashboard" />
            : null
        }
        <LoginHeader /> 
            <div className='container-fluid '>
                <div className='row d-flex justify-content-center' >
                
                    <div className='col-md-4'>
                        <LoginForm />
                    </div>
                  

                </div>

                
                
            </div>                
            <Footer />  
        </div>
       
  
    )
}
