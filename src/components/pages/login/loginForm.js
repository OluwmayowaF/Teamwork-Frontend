import React, { Component } from 'react';



export class login extends Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''

    }

    saveUser = (user) =>{
        localStorage.setItem('user', user);
        this.viewUser(user);

        console.log(user)

    }
    viewUser = (user) => {
        console.log(user.data.firstname)
    }

    onSubmit = (e) => { e.preventDefault();
    const url = ' https://teamwork-be-api.herokuapp.com/api/v1/auth/signin';
    fetch(url, {
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
        if(data.status === 'success' ){
            this.saveUser(data)
        }else if(data.status === 'error' ){
            console.log(data.error)
        }
        else{
            console.log('Something went wrong check your internet connection')

        }
            
        
    }
    

    )
    
}
        
        
      
    //onChange = (e) =>this.setState({[e.target.name]: 
     //   e.target.value});
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        

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
                value={this.state.email}
                onChange={this.onChange}
                className="form-control"/>
                <p className="email-error" name="emailError" value={this.state.emailError} onChange={this.onChange}>
                
                </p>

                </div>
                
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type= "password"
                name = "password" 
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.onChange} 
                className="form-control"/>
                <p className="password-error">
                    
                    </p>
                </div>
                <div className="form-group">
                <input type="submit"
                value="LOGIN"
                className="Login-btn"
                />
               
                </div>
                
                
                </form>
            
           
            </div>
        )
    }
    
}

export default login
