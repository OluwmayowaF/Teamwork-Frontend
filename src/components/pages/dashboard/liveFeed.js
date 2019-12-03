import React, { Component } from 'react';
import Feeds from '../../elements/feed'
import { getToken }   from '../../auth';
//import { signedInUser }   from '../../auth';
import { Redirect } from 'react-router-dom'
import { feedsUrl } from '../../apis'
import swal from '@sweetalert/with-react'
import { ClipLoader } from 'react-spinners';


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
          <div className='allFeed' >
            
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
            )):
            <div className='text-center loadingscreen' >
            <div className='sweet-loading' >
            <ClipLoader
             //css={override}
              sizeUnit={"px"}
               size={100}
              color={'#0659FB'}
               loading={this.state.loading}
               />
               <p style={{color:'#D0D0D0'}}>Please Hold on a minute while we fetch you some data</p>
               </div>
      </div> 
     
      
            }
            </div>
          
        )
    }
   
        
}

export default liveFeed

