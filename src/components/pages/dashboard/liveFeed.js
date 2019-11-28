import React, { Component } from 'react';
import Feeds from '../../elements/feed'
import { getToken }   from '../../auth';
import { signedInUser }   from '../../auth';
import { Redirect } from 'react-router-dom'
import { feedsUrl } from '../../apis'
import swal from '@sweetalert/with-react'

export class liveFeed extends Component {
    state={
      feeds :[

      ]
    }


  componentDidMount(){
    signedInUser()
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
        this.setState({feeds: data.data})
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
        return this.state.feeds.map((feed , key) =>(
            <div key = {
              feed.url ? 'gif'+feed.id : 'article'+feed.id
            }>
            <Feeds 
            id={feed.id} 
            article = {feed.article}  
            title={feed.title} 
            url={feed.url}
            date={feed.createdon}
            authorId={feed.authorid}/>
            </div>
        )
        )}
}

export default liveFeed

