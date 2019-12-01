import React from 'react';
//import Sidebar from '../../layout/sidebar'
import CreateEmployee from './createEmployee'
import Sidebar from '../../layout/sidebar'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
//import { loggedIn }   from '../../auth';
import '../../../App.css';

function createEmployeePage(props) {
    return (
        <div>
       
           
            <CreateEmployee />
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
        </div>
    )
}

//Proptypes
createEmployeePage.propTypes = {
    logOut: PropTypes.func.isRequired,
    UserName: PropTypes.string.isRequired,
 
}
export default withRouter(createEmployeePage)
