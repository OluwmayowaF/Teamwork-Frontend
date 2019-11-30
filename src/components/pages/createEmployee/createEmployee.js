import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../App.css';
import { createEmployeeUrl } from '../../apis'

export class createEmployee extends Component {
    state = {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                department: '',
                jobrole: '',
                gender: '',
                address: ''
    }

    // Set state 

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})       
    }

    onSubmit = (e) => {
        e.preventDefault();

        fetch(createEmployeeUrl,{
            method: 'POST',
            mode: 'cors',
            headers: {
              "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ 
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            department: this.state.department,
            jobrole: this.state.jobrole,
            gender: this.state.gender,
            address: this.state.address
        }),
          })

          .then(resp => resp.json())
          .then(data => { console.log(data)})
    }


    //
    render() {
        return (
            <div  style={{marginLeft:"250px", marginRight:"150px"}}>
            <form onSubmit ={this.onSubmit}>
            <div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="firstname">Firstname</label>
                <input type= "text"
                name = "firstname" 
                placeholder="Employee's firstname"
                className="form-control"
                onChange={this.onChange} 
                value={this.state.firstname}
                required/>
               
                </div><div className="form-group col-xs-10 ccol-sm-6 col-md-6 col-lg-6">
                <label htmlFor="lastname">Lastname</label>
                <input type= "text"
                name = "lastname" 
                placeholder="Employee's lastname"
                className="form-control"
                onChange={this.onChange} 
                value={this.state.lastname}
                required/>
               
                </div>
                <div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="email">Email</label>
                <input type= "text"
                name = "email" 
                placeholder="Employee's email"
                className="form-control"
                onChange={this.onChange} 
                value={this.state.email}
                required/>
               
                </div>
               
                <div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="password">Password</label>
                <input type= "password"
                name = "password" 
                placeholder="Employee's password"
                onChange={this.onChange} 
                value={this.state.password}
                className="form-control"
                required/>
               
              
                </div><div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="department">Department</label>
                <input type= "text"
                name = "department" 
                placeholder="Employee's Department"
                className="form-control"
                onChange={this.onChange} 
                value={this.state.department}
                required/>
               
                </div><div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="jobrole">JobRole</label>
                <input type= "text"
                name = "jobrole" 
                placeholder="Employee's jobrole"
                className="form-control"
                onChange={this.onChange} 
                value={this.state.jobrole}
                />
               
                    </div><div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="gender">Gender</label>
                <select className="form-control"  name="gender"  value={this.state.gender}  onChange={this.onChange} >
                    <option>Choose your gender</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                </select>
                </div>
               
                <div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="address">Adddress</label>
                <input type= "textarea"
                name = "address" 
                placeholder="Employee address"
                className="form-control"
                value={this.state.address}
                onChange={this.onChange} 
                />
               
                </div>
               
                <div className="form-group">
                <input type="submit"
              value="Submit"
                className="Login-btn"
                />
                </div>
                
                </form>
                
                
            </div>
        )
    }
}

export default withRouter(createEmployee)
