import React, { Component } from 'react';
import { addGifUrl,   } from '../../apis'
import { getToken } from '../../auth'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import { loggedIn }   from '../../auth';
import swal from '@sweetalert/with-react'

export class gifAdd extends Component {

    state ={
        addBtn:"Post Gif"
    }
    onChangeGif = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }
   

    addGif = (e) => {
        this.setState({addBtn: 'Posting..'
    })
        e.preventDefault();
       const token = getToken();
        const body =  new FormData(this.form);
        fetch(addGifUrl, 
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                  
                    "Authorization": token
                },
                body
                
                })
    
                .then(resp => resp.json())
                .then(data => { 
                    this.setState({addBtn: 'Post Gif'})
                if (data.status === 'error'){
                swal({
                    
                    text: `${data.message}`,
                    icon: "error",
                  });
                console.log(data)
                }if (!data){
                    swal({
                    
                        text: `Something went wrong check your internet connection and try again`,
                        icon: "error",
                      });
                    console.log(data)

                }else{
                    swal({
                    
                        text: `${data.data.message}`,
                        icon: "success",
                      });
                    this.props.history.push(`/dashboard/gif/${data.data.gifId}`)
                    console.log(data.data)

                }
                })
        }
    render() {
        return (
            <div>
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Header pageTitle='Add A Gif' HeaderIcon={<button className='backBtn' onClick={() => this.props.history.goBack()}>BACK</button>}/> 
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            <div className='compContainer'>
            <form ref={el => (this.form = el)} onSubmit ={this.addGif}  className='addPost'>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type= "text"
                name = "title" 
                placeholder="Gif Title"
                className="form-control"
               required />
                </div>
               
                <div className="form-group">
                <label htmlFor="gif">Upload Gif</label>
                
                <input type="file" name='image' 
                className="form-control-file"  required/>
               
                
                <br />
                </div>


               
                <div className="form-group">
                <input type="submit"
                value={this.state.addBtn}
                className="Login-btn"
                />
                </div>
                
                </form>
                </div>
            </div>
        )
    }
}
//Proptypes
gifAdd.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired
 
}

export default withRouter(gifAdd)
