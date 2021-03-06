import React from 'react';
//import Sidebar from '../../layout/sidebar'
import CreateEmployee from './createEmployee'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
//import { loggedIn }   from '../../auth';
import '../../../App.css';

function createEmployeePage(props) {
    const icon = <Link to="/dashboard/manageemployees">
    <button className='backBtn'> manage </button>
    </Link>
    return (
        <div className='mainContainer'>
        <Sidebar logOut={props.logOut} UserName={props.UserName} />
        <div className='side'>
        <Header pageTitle='New Employee' HeaderIcon={icon}/>
        <div className='allFeed'>
        <CreateEmployee />
        </div>
        </div>
        </div>
    )
}

//Proptypes
createEmployeePage.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired,
 
}
export default withRouter(createEmployeePage)
