import React from 'react';
//import Sidebar from '../../layout/sidebar'
import CreateEmployee from './createEmployee'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
//import { loggedIn }   from '../../auth';
import '../../../App.css';

function createEmployeePage(props) {
    const icon = <img src="https://res.cloudinary.com/oluwamayowaf/image/upload/v1576619971/TeamWorkFE/fab_2_ewhp1a.svg" alt="manage"/>
    return (
        <div>
        
            <Header pageTitle='New Employee' HeaderIcon={icon}/>

            <Sidebar logOut={props.logOut} UserName={props.UserName} />
           
            <CreateEmployee />
            
          
            
        </div>
    )
}

//Proptypes
createEmployeePage.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired,
 
}
export default withRouter(createEmployeePage)
