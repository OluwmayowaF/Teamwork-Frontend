import React, { Component } from 'react';
import Sidebar from '../../layout/sidebar'
import Footer from '../../layout/Footer'
import { Redirect } from 'react-router-dom';
import LiveFeed from './liveFeed'
import '../../../App.css';
import { loggedIn }   from '../../auth';
import PropTypes from 'prop-types';



export class dashboard extends Component {

    render() {
        return (
            

            <React.Fragment>
            
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            
                <LiveFeed />
                <Footer />
               
                
               
            </React.Fragment>
           
        )
    }
}

//Proptypes
dashboard.propTypes = {
    logOut: PropTypes.func.isRequired,
    UserName: PropTypes.string.isRequired,
 
}

export default dashboard
