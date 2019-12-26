import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Sidebar from '../../layout/Sidebar'
import PropTypes from 'prop-types';
import MyFeed from './myFeed'
import Header from '../../layout/Header'

export class myposts extends Component {

    render() {
        return (
          <div className='mainContainer'>
          <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
          <div className ='side'>

          
          <Header pageTitle='My Posts' buttonText ={<Link style={{ color: '#4D6488', textDecoration:'none' }}
           to='/dashboard'>all posts</Link>}/> 
        
          <div className='allFeed'>
            <MyFeed />
            </div>
            </div>
          </div>
        )
    }
   
        
}

myposts.propTypes = {
  logOut: PropTypes.func.isRequired,
  // UserName: PropTypes.string.isRequired,

}
export default myposts

