import React, { Component } from 'react';
import Sidebar from './sidebar';
//import LiveFeed from './liveFeed'
import AddArticle from '../addArticle/addArticle';
import AddGif from './addGifs';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
//import CreateEmployee from '../createEmployee/createEmployee'


export class dashboard extends Component {

    state ={
            title: '',
            article: '',
            gif: '',
            category: 'General',
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})    
        console.log(e.target.files)

    }

   

  
    addArticle = (e) => {
        e.preventDefault();
        const url = 'https://teamwork-be-api.herokuapp.com/api/v1/articles';
        fetch(url, 
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU3MzcxMDA0OCwiZXhwIjoxNTgyMzUwMDQ4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0MzAwMCJ9.2g85lJy9XIK17g3HMdZ8HVB90vZwj2c8S8TioSid0kY"
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

        addGif = (e) => {
            e.preventDefault();
            const url = 'https://teamwork-be-api.herokuapp.com/api/v1/gifs';
            fetch(url, 
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU3MzcxMDA0OCwiZXhwIjoxNTgyMzUwMDQ4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0MzAwMCJ9.2g85lJy9XIK17g3HMdZ8HVB90vZwj2c8S8TioSid0kY"
                  },
                  body: JSON.stringify({ 
                    title: this.state.title,
                    image: this.state.gif,
                   
                }),
                  })
        
                  .then(resp => resp.json())
                  .then(data => { console.log(data)})
            }
    render() {
        return (
            <div>
                <Sidebar />
                <AddArticle title={this.state.title} article={this.state.article} category={this.state.category} 
                onChange={this.onChange}  onSubmit={this.addArticle} />
                <AddGif title={this.state.title} gif={this.state.gif} 
                onChange={this.onChange}   onSubmit={this.addGif} />
                
            </div>
        )
    }
}

export default dashboard
