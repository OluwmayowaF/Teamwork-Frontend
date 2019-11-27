import React from 'react';
import Sidebar from '../../layout/sidebar'
import CreateEmployee from './createEmployee'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { loggedIn }   from '../../auth';
import '../../../App.css';

function createEmployeePage(props) {
    return (
        <div>
        {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Sidebar logOut={props.logOut} />
            <CreateEmployee />
        </div>
    )
}

//Proptypes
createEmployeePage.propTypes = {
    logOut: PropTypes.func.isRequired
 
}
export default withRouter(createEmployeePage)
