import React, { Component } from 'react';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/pages/login/login';
import Dashboard from './components/pages/dashboard/dashboard';
import Footer from './components/layout/Footer';
import Createemployeepage from './components/pages/createEmployee/createEmployeePage';
import Postarticles from './components/pages/addArticle/addArticle';
import Postgifs from './components/pages/addGif/addGif';
import PostAgif from './components/pages/addGif/gifadd'
import ViewArticle from './components/pages/article/viewArticle'
import ViewGif from './components/pages/gif/viewGif'
import Myposts from './components/pages/dashboard/myposts'
import { addGifUrl   } from './components/apis'
import { getToken } from './components/auth'
import './App.css';

export class App extends Component {

    
    state ={
        loggedIn:false
    }

    logOut = () => {
        localStorage.removeItem('T_T_W');
       return <Redirect to={"/login"}/>
    }

   

    onChangeGif = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }

    addGif = (e) => {
        e.preventDefault();
        const token = getToken();
       
        
        fetch(addGifUrl, 
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": token
                },
                body: JSON.stringify( { 

                
                title: this.state.title,
                image: this.state.gif,
                
            },)
                })
    
                .then(resp => resp.json())
                .then(data => { console.log(data)})
                
    }


    //UserName = `${authUser.data.firstname} ${authUser.data.lastname}`

    


    render(){
        return (
             <React.Fragment>
               
            <Router>
           
            
            <Header logout={this.logOut} />
            <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/login" component={ Login } />

            <Route exact path="/dashboard"  
            render={(props) => <Dashboard {...props} logOut={this.logOut} UserName={this.UserName}  />}  />

            <Route exact path="/dashboard/myposts"  
            render={(props) => <Myposts {...props} logOut={this.logOut} UserName={this.UserName}  />}  />


            <Route path="/dashboard/createemployee" 
            render={(props) => <Createemployeepage {...props} logOut = {this.logOut} UserName={this.UserName} />} />

            <Route path="/dashboard/postarticle" 
            render={(props) => <Postarticles {...props} 
            logOut = {this.logOut} title={this.state.title} article={this.state.article} 
            category={this.state.category} onChange={this.onChangeArticle}  onSubmit={this.addArticle}  
            />} />

            <Route path="/dashboard/postgif" 
            render={(props) => <Postgifs {...props} 
            logOut = {this.logOut} title={this.state.title} gif={this.state.gif} 
            onChange={this.onChangeGif}  onSubmit={this.addGif}  
            />} />

            <Route path="/dashboard/article/:articleid" 
            component={ ViewArticle } />

            <Route path="/dashboard/gif/:gifid" 
            component={ ViewGif } />

            <Route path="/dashboard/addagif" 
            component={ PostAgif } />

            </Switch>

            <Footer />
            
            </Router>
                
            </React.Fragment>
        )
    }

   

}

export default App
