import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import { loggedIn }   from '../../auth';
import AddGifForm from './addGifForm';

function addGif(props) {
    return (
        
        <div>
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Header pageTitle='Add A Gif' HeaderIcon={<button className='backBtn' onClick={() => this.props.history.goBack()}>BACK</button>}/> 
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            <AddGifForm  title={props.title} gif={props.gif}  form={props.form}
            onChange={props.onChange}  onSubmit={props.onSubmit}  />
        </div>
            
        
    )
}
//Proptypes
addGif.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired
}

export default withRouter(addGif)
