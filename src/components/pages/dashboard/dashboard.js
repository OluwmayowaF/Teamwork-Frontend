import React, { Component } from 'react';
import Sidebar from '../../layout/Sidebar'
//import Footer from '../../layout/Footer'
import { Redirect, Link } from 'react-router-dom';
import LiveFeed from './liveFeed'
import '../../../App.css';
import { loggedIn }   from '../../auth';
import PropTypes from 'prop-types';
import Header from '../../layout/Header';



export class dashboard extends Component {

    render() {
        return (

            <div>
            <Header pageTitle='Home'  buttonText ={<Link style={{ color: '#4D6488', textDecoration:'none' }}
             to='/dashboard/myposts'>my posts</Link>}/> 
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <div className='compContainer container-fluid' >
                <div className='row'>
            <LiveFeed />
            </div>
            </div>
           
             
            </div>
           
           
        )
    }
}

//Proptypes
dashboard.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired,
 
}

export default dashboard
