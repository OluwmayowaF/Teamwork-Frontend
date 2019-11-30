import React, { Component } from 'react';
import Feeds from '../../elements/feed'
import { getToken }   from '../../auth';
//import { signedInUser }   from '../../auth';
import { Redirect } from 'react-router-dom'
import { myfeedsUrl } from '../../apis'
import swal from '@sweetalert/with-react'
import { ClipLoader } from 'react-spinners';
import Sidebar from '../../layout/sidebar'


export class myposts extends Component {
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
          <Sidebar logOut={this.props.logOut}  />
          <div>
            {
            this.state.isloaded 
            ?
            this.state.feeds.map((feed , key) =>(
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
            )):<div className='sweet-loading' style={{margin:'20% 50%'}}>
            <ClipLoader
             //css={override}
              sizeUnit={"px"}
               size={200}
              color={'#0659FB'}
               loading={this.state.loading}
               />
      </div> 
            }
            </div>
          </React.Fragment>
        )
    }
   
        
}

export default myposts

