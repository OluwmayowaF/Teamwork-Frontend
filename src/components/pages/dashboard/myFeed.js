import React, { Component } from 'react';
import Feeds from '../../elements/feed'
import { getToken }   from '../../auth';
//import { signedInUser }   from '../../auth';
import { Redirect,Link } from 'react-router-dom'
import { myfeedsUrl } from '../../apis'
import swal from '@sweetalert/with-react'
import PropTypes from 'prop-types';
import LoadingScreen from '../../elements/loadingScreen';


export class myFeed extends Component {
    state={
      feeds :[

      ],
      isloaded: false,
    }


  componentDidMount(){
  //  signedInUser()
   const token = getToken();
    fetch(myfeedsUrl, {
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
        console.log(data)
        this.setState({feeds: data.data})
        this.setState({isloaded:true})
        
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
        <React.Fragment >
            {
            this.state.isloaded 
            ?
            this.state.feeds.map((feed , key) =>(
            <div  key = {
              feed.url ? 'gif'+feed.id : 'article'+feed.id
            }>
            
            <Feeds 
            id={feed.id} 
            article = {feed.article}  
            title={feed.title} 
            url={feed.imageurl}
            date={feed.createdon}
            authorId={feed.authorid}/>
            </div>
            )):<LoadingScreen />
            }
            </React.Fragment>
        )
    }
   
        
}

myFeed.propTypes = {
  logOut: PropTypes.func.isRequired,
  // UserName: PropTypes.string.isRequired,

}
export default myFeed

