import React, { Component } from 'react';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/pages/login/login';
import Dashboard from './components/pages/dashboard/dashboard';
import Footer from './components/layout/Footer';
import Createemployeepage from './components/pages/createEmployee/createEmployeePage';
import Postarticles from './components/pages/addArticle/addArticle';
import Postgifs from './components/pages/addGif/addGif';
import Viewarticle from './components/pages/article/viewArticle'
import { addArticleUrl , addGifUrl,   } from './components/apis'
import { getToken } from './components/auth'

//import Auth from './components/auth'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export class App extends Component {

    
    state ={
        title: '',
        article: '',
        gif: '',
        category: 'General',
    }

    logOut = () => {
        localStorage.removeItem('T_T_W');
       return <Redirect to={"/login"}/>
    }

    onChangeArticle = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }


    addArticle = (e) => {
        e.preventDefault();
        const token = getToken();
        fetch(addArticleUrl, 
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
            },
            body: JSON.stringify({ 
                title: this.state.title,
                article: this.state.article,
                tag: this.state.category,
            }),
            })

            .then(resp => resp.json())
            .then(data => { console.log(data)})
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
                body: JSON.stringify({ 
                title: this.state.title,
                image: this.state.gif,
                
            }),
                })
    
                .then(resp => resp.json())
                .then(data => { console.log(data)})
        }

    


    render(){
        return (
            <div>
               
            <Router>
            <div className="App">
            
            <Header />
            <Route exact path="/" component={ Login } />
            <Route path="/login" component={ Login } />

            <Route exact path="/dashboard"  
            render={(props) => <Dashboard {...props} logOut={this.logOut}   />}  />

            <Route path="/dashboard/createemployee" 
            render={(props) => <Createemployeepage {...props} logOut = {this.logOut}  />} />

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

            <Route path="/dashboard/article/:articleid" component={ Viewarticle } />

            <Footer />
            </div>
            </Router>
                
            </div>
        )
    }

   

}

export default App
