import React, { Component } from 'react'
import { getToken} from '../auth'
import { GetAllUserUrl } from '../apis'
import User from '../elements/user';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import LoadingScreen from '../elements/loadingScreen'


export class manageEmployee extends Component {
state ={
    employees:'',
    loaded:false,
}

componentDidMount = () =>{
    this.getEmployees();
}

getEmployees = () =>{
const token = getToken();

fetch(GetAllUserUrl, {
    method: 'GET',
    mode: 'cors',
    headers:{
        "Content-type":"application/json; charset=UTF-8",
        "Authorization": token
    }
})
.then(resp => resp.json())
.then(data => {
    if(data){
        this.setState({
            employees:data.rows
        })
    
       
        this.setState({
            loaded:true
        })
        console.log(this.state.employees)
    }else{
        this.props.history.push("/dashboard")
    }
    
})



}
    render() {
        return (
            <div className='mainContainer'>
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            <div className ='side'>
            <Header 
                 pageTitle= 'Employees' HeaderIcon={<button className='backBtn' 
                 onClick={() => this.props.history.goBack()}>BACK</button>}/> 
            
           
                {
                    this.state.loaded === true ?
                    this.state.employees.map((employee , key) =>(
                    <div key={employee.id} className='compContainer'>
                    <User 
                    firstname={employee.firstname}
                    lastname={employee.lastname}
                    gender={employee.gender}
                    />
                    </div>)):<LoadingScreen />
                }
            </div>
               
               
                
            </div>
        )
    }
}

export default manageEmployee
