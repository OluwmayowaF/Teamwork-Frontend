import React, { Component } from 'react';
import Articles from '../../elements/article'
import { getToken }   from '../../auth';
import { Redirect } from 'react-router-dom'
import { feedsUrl } from '../../apis'
import swal from '@sweetalert/with-react'

export class liveFeed extends Component {
    state={
      articles :[

      ]
    }


  componentDidMount(){
    
   const token = getToken();
    fetch(feedsUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Accept": "aplication/json",
        "Authorization": token
    }
    })
    .then(resp => resp.json())
    .then(data => { 
      if (data){
        this.setState({articles: data.data})
      } if (data.status === '401'){
        return   <Redirect to="/login" />
      } if (!data){
        console.log('Nothing to see here')
      }
    })
    .catch(err => {
      if(err) {
          swal(
              <div>
                <h3>Something doesn't seem right</h3>        
                <p>Please check your internet connection and try again</p>
              </div>
            )
      }
  })

   
  }
    render() {
        return this.state.articles.map((articlez) =>(
            <div>
            <Articles 
            id={articlez.id} 
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

