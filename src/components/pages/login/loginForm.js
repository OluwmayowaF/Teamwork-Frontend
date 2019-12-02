import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { saveUser }   from '../../auth';
import { loginUrl } from '../../apis'
import swal from '@sweetalert/with-react'




export class login extends Component {
    state = {
        user: [
         { email: '',
           password: '',
          }
        ],
        loginbtn: 'LOGIN',
        userError: false,
        emailError: false,
        passwordError: false,

    }

    onChange = (e) => {
       
        this.setState({[e.target.name]: e.target.value})       
    }

    // Validate Form 

    validEmail= (e) => {
        const emailTest  = /\S+@\S+\.\S+/.test(e.target.value);
        if (e.target.value.length < 1 ){
            e.target.style.border = '2px solid red';
            this.setState({emailError: true});
            return false;
        } 
        if (emailTest === false){
            e.target.style.border = '2px solid red';
            this.setState({emailError: true});
            return false;
        } else {
            e.target.style.border = '2px solid #90EE90';
            this.setState({emailError: false});
            return true;
        }
        
    }
    validPassword= (e) => {
        if (e.target.value.length < 1 ){
            e.target.style.border = '2px solid red';
            this.setState({passwordError: true});
            return false;
        } else {
            e.target.style.border = '2px solid #90EE90';
            this.setState({passwordError: false});
            return true;
        }
        
    }
    

    onSubmit = (e) => { 
    e.preventDefault();
    if(this.validEmail !== false && this.validPassword !== false){
        this.setState({loginbtn: 'Loading...'})
        
        fetch(loginUrl, {
          method: 'POST',
          mode: 'cors',
          headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
          body: JSON.stringify({ 
            email: this.state.email,
            password: this.state.password 
        }),
          
        })
       .then(resp => resp.json())
        .then(data => {
            this.setState({loginbtn: 'LOGIN'})
    
            if(data.status === 'success' ){
                saveUser(data)
                this.props.history.push('/dashboard');
            }else if(data.error === 'Invalid Credentials' ){
                this.setState({userError: true});
            }
            else{
                swal(
                    <div>
                      <h3>Something doesn't seem right</h3>        
                      <p>Please check your internet connection and try again</p>
                    </div>
                  )
            }          
            
        })
        .catch(err => {
            this.setState({loginbtn: 'LOGIN'})
            if(err) {
                swal(
                    <div>
                      <h3>Something doesn't seem right</h3>        
                      <p>Please check your internet connection and try again</p>
                    </div>
                  )
            }
        })

    } else{
        console.log('go and fill those fielsds guy')
    } 
  
    
}     
    render() {   
        return (
            <div> 
                <h3 className="text-left col-md-12" >Login</h3>
                <p className="text-left col-md-12" >Contact the IT department for your login credentials</p>
                
                <form onSubmit ={this.onSubmit}>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type= "text"
                name = "email" 
                placeholder="Enter your email address..."
                value={this.state.user.email}
                onChange={this.onChange}
                onBlur={this.validEmail}
                className="form-control"
                required/>
                <div >{
                    this.state.emailError  ?  
                    <p className="error-message">A valid email is required to login</p>
                    : null 
                }</div>
                </div>
               
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type= "password"
                name = "password" 
                placeholder="Enter your password"
                value={this.state.user.password}
                onChange={this.onChange} 
                onBlur={this.validPassword}
                className="form-control"
                required/>
                <div>{
                    this.state.passwordError  ?  
                    <p className="error-message">Password is required to login</p>
                    : null 
                }</div>
                <br />
                </div>
               
                <div className="form-group">
                <input type="submit"
                value={this.state.loginbtn}
                className="Login-btn"
                />
                </div>
                {
                    this.state.userError  ?  
                    <p className="error-message">The email or password provided is incorrect please try again</p>
                    : null 
                }
                
                </form>
            
           
            </div>
        )
    }
    
}

export default withRouter(login)
