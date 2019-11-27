import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Sidebar from '../../layout/sidebar'
import { loggedIn }   from '../../auth';
import AddGifForm from './addGifForm';

function addGif(props) {
    return (
        
        <div>
        {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Sidebar logOut={props.logOut} />
            
            <AddGifForm  title={props.title} gif={props.gif}  
            onChange={props.onChange}  onSubmit={props.onSubmit}  />
            
            
        </div>
            
        
    )
}
//Proptypes
addGif.propTypes = {
    logOut: PropTypes.func.isRequired
 
}

export default withRouter(addGif)
