import React, { Component } from 'react';
import Articles from '../../elements/article'

export class liveFeed extends Component {
    state={
      articles :[

      ]
    }


  componentDidMount(){
    const url = 'https://teamwork-be-api.herokuapp.com/api/v1/feeds';
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Accept": "aplication/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU3MzcyMTU0MCwiZXhwIjoxNTgyMzYxNTQwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0MzAwMCJ9.g1HgetmUo-7d6EdxiZSjxIBUzCWznO5dccc5ckBRvpg"
    }
    })
    .then(resp => resp.json())
    .then(data => { 
      this.setState({articles: data.data})
      console.log(this.state.articles)
    })
   
  }
    render() {
        return this.state.articles.map((articlez) =>(
            <div>
            <Articles key={articlez.id} 
            article = {articlez.article}  
            title={articlez.title} 
            url={articlez.url}
            date={articlez.createdon}
            authorId={articlez.authorid}/>
                
            </div>
        )
        )}
}

export default liveFeed

