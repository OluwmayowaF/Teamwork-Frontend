import React, { Component } from 'react';
import Feeds from '../../elements/feed'
import { getToken }   from '../../auth';
//import { signedInUser }   from '../../auth';
import { Redirect } from 'react-router-dom'
import { feedsUrl } from '../../apis'
import swal from '@sweetalert/with-react'
import LoadingScreen from '../../elements/loadingScreen'


export class liveFeed extends Component {
    state={
      feeds :[

      ],
      loaded: false,
    }


  componentDidMount(){
  //  signedInUser()
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
        this.setState({loaded:true})
        
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
        return (
          <div className='' >
            
            {
            this.state.loaded ?
            this.state.feeds.map((feed , key) =>(
            <div  
            key = {
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
            )): <LoadingScreen />      
            }
            </div>
          
        )
    }
   
        
}

export default liveFeed

