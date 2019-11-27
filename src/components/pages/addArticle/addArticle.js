import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Sidebar from '../../layout/sidebar'
import { loggedIn }   from '../../auth';
import AddArticleForm from './addArticleform';
 function addArticle(props) {
    return (
        <div>
        {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Sidebar logOut={props.logOut} />
            
            <AddArticleForm  title={props.title} article={props.article} category={props.category} 
            onChange={props.onChange}  onSubmit={props.onSubmit}  />
            
            
        </div>
    )
}

//Proptypes
addArticle.propTypes = {
    logOut: PropTypes.func.isRequired
 
}

export default withRouter(addArticle)