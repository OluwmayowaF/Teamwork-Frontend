import React, { Component } from 'react';
import Sidebar from '../../layout/sidebar'
import { Redirect } from 'react-router-dom';
import LiveFeed from './liveFeed'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import { loggedIn }   from '../../auth';
import PropTypes from 'prop-types';



export class dashboard extends Component {

    render() {
        return (
            <div className='container-fluid'>
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <aside>
            <Sidebar logOut={this.props.logOut} />
            </aside>
            <LiveFeed />
            
            
            
            
            </div>
        )
    }
}

//Proptypes
dashboard.propTypes = {
    logOut: PropTypes.func.isRequired
 
}

export default dashboard
