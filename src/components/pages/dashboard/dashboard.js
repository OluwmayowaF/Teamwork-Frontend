import React, { Component } from 'react';
import Sidebar from '../../layout/Sidebar'
//import Footer from '../../layout/Footer'
import { Redirect } from 'react-router-dom';
import LiveFeed from './liveFeed'
import '../../../App.css';
import { loggedIn }   from '../../auth';
import PropTypes from 'prop-types';
import Header from '../../layout/Header';



export class dashboard extends Component {

    render() {
        return (
            

            <div>

            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            <div  style={{width:'91.5%', float:'right'}}>
            <Header /> 
           
             
            
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            
            <div className='container-fluid' >
                <div className='row'>
            <LiveFeed />
            </div>
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
