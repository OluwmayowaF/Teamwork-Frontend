import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/pages/login/login';
import Dashboard from './components/pages/dashboard/dashboard';
// import Footer from './components/layout/Footer';
import Createemployeepage from './components/pages/createEmployee/createEmployeePage';
import Postarticles from './components/pages/addArticle/addArticle';
import Postgifs from './components/pages/addGif/addGif';
import PostAgif from './components/pages/addGif/gifadd'
import ViewArticle from './components/pages/article/viewArticle'
import ViewGif from './components/pages/gif/viewGif'
import Myposts from './components/pages/dashboard/myposts'
import Notfound from './components/pages/notFound'
import ManageEmployees from './components/pages/manageEmployee'
// import { loggedIn} from './components/auth'
import './App.css';

export class App extends Component {
/*
    state = {
        loggedIn:false,
    }

    componentDidMount =() =>{
        this.checkLoginStatus();
    }

    checkLoginStatus = () => {
        if(loggedIn === true ){
            this.setState({
                loggedIn:true
            })
        }

    }
    */


    logOut = () => {
        localStorage.removeItem('T_T_W');
       return <Redirect to={"/login"}/>
    }

    

    


    render(){
        return (
             <React.Fragment>
               
            <Router>
           
            
            
            <Switch>
              
            <Route exact path="/" component={ Login } />
            <Route path="/login" component={ Login } />
          

            <Route exact path="/dashboard"  
            render={(props) => <Dashboard {...props} logOut={this.logOut} UserName={this.UserName}  />}  />

            <Route exact path="/dashboard/myposts"  
            render={(props) => <Myposts {...props} logOut={this.logOut} UserName={this.UserName} />}  />


            <Route path="/dashboard/createemployee" 
            render={(props) => <Createemployeepage {...props} logOut = {this.logOut} UserName={this.UserName} />} />

            <Route path="/dashboard/manageemployees" 
            render={(props) => <ManageEmployees {...props} logOut = {this.logOut} UserName={this.UserName} />} />

            <Route path="/dashboard/postarticle" 
            render={(props) => <Postarticles {...props} 
            logOut = {this.logOut} UserName={this.UserName}
            />} />

            <Route path="/dashboard/postgif" 
            render={(props) => <PostAgif {...props} 
            logOut = {this.logOut} UserName={this.UserName}
            />} />

            <Route path="/dashboard/postgifold" 
            render={(props) => <Postgifs {...props} 
            logOut = {this.logOut} UserName={this.UserName}
            />} />

            <Route path="/dashboard/article/:articleid"  
            render={(props) => <ViewArticle {...props} 
            logOut = {this.logOut}   UserName={this.UserName}
            />} />

            <Route path="/dashboard/gif/:gifid"  
            render={(props) => <ViewGif {...props} 
            logOut = {this.logOut}   UserName={this.UserName}
            />} />

            <Route 
            render={(props) => <Notfound {...props} logOut={this.logOut} UserName={this.UserName}  />}  />
           

            </Switch>

           
            
            </Router>
                
            </React.Fragment>
        )
    }

   

}

export default App
