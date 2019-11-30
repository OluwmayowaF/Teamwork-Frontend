import React from 'react';
//import Sidebar from '../../layout/sidebar'
import CreateEmployee from './createEmployee'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
//import { loggedIn }   from '../../auth';
import '../../../App.css';

function createEmployeePage(props) {
    return (
        <div>
       
           
            <CreateEmployee />
        </div>
    )
}

//Proptypes
createEmployeePage.propTypes = {
    logOut: PropTypes.func.isRequired
 
}
export default withRouter(createEmployeePage)
