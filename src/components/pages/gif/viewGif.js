import React, { Component } from 'react'
import Gif from '../../../components/elements/gif'
import Comment from '../../../components/elements/comment'
import CommentForm from '../../elements/commentForm'
import { viewGifUrl } from '../../../components/apis'
import { getToken, authUser , loggedIn} from '../../auth'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import LoadingScreen from '../../elements/loadingScreen';
import PropTypes from 'prop-types';

export class viewGif extends Component {

    state ={
        gif:null,
        loaded:false,
        addcomments:' ',
        newcomment:null,
        commentAdded:false,
        owner:false,
    }

    componentDidMount = () =>{
        this.getGif()
        this.checkOwner()
    }

    checkOwner = (ownerId) =>{
        const thisUser = authUser.data.userId 
        if (thisUser === ownerId){
        this.setState({owner: true})
        console.log(thisUser)
        console.log(ownerId)
            
        }

    }

    getGif =() =>{
        const token = getToken();
        const {gifid} = this.props.match.params

        fetch(viewGifUrl+gifid, {
            method: 'GET',
            mode: 'cors',
            headers:{
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
            },
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gif:data.data
            })
            this.checkOwner(this.state.gif.ownerid)
            this.setState({
                loaded:true
            })
            console.log(this.state.gif)
        })
    }


    addComment = (e) => {
        e.preventDefault();
        const token = getToken();
        const {gifid} = this.props.match.params
        try{
            fetch(viewGifUrl+gifid+'/comment', {
                method:'POST',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": token
                },
                body: JSON.stringify({ 
                  comment: this.state.addcomments,
              }),
            })
            .then(resp => resp.json())
            .then(data => {
                if (data){
                    this.getGif()
                    this.setState({newcomment: data})
                    this.setState({commentAdded: true})
                    console.log(data.data)
                  
                }
            })

        }catch{

        }

    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }

    deleteGif = (e) => {
        //e.preventDefault();
        const token = getToken();
        const {gifid} = this.props.match.params
        try{
            fetch(viewGifUrl+gifid, {
                method:'DELETE',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": token
                },
            })
            .then(resp => resp.json())
            .then(data => {
                if (data){
                    swal(`${data.data.message}`, {
                        icon: "success",
                      });
                   console.log(data)
                       this.props.history.push("/dashboard")
                  
                }
            })

        }catch{

        }


    }


    render() {
        return (
            <div className ='mainContainer' >
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
                <div className='side'>
                {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            {
                this.state.loaded ?
                <Header 
                 pageTitle= {'Gif - '+this.state.gif.ownername} HeaderIcon={<button className='backBtn' onClick={() => this.props.history.goBack()}>BACK</button>}/> :null
            }
            <div className=" allFeed"  >
                {
                this.state.loaded ?
                <div className='viewPost'> 
                <Gif 
                id={this.state.gif.id}
                date={this.state.gif.createdOn}
                title={this.state.gif.title}
                url={this.state.gif.url}
                deleteGif={this.deleteGif}
                isOwner ={this.state.owner}
                />
                <CommentForm addComment={this.addComment} addComments={this.state.addcomments}
                    onChange={this.onChange} />
                </div>
                :<LoadingScreen />     

                }
                <div style={{width:'60%', margin:'auto'}}>
                {  this.state.loaded ?
                    typeof this.state.gif.comments === 'object' ? 
                    this.state.gif.comments.map((comment ) =>(
                <Comment
                id = {comment.commentid} 
                comment={comment.comment}
                authorid={comment.authorid}
                authorName= {`${comment.firstname} ${comment.lastname}`}
                date={comment.comment_date}
                />
                ))
                    :<p>{this.state.gif.comments}</p>
                    :
                    null
                }
              </div>
                </div>
                </div>
           
                
            </div>
        )
    }
}

//Proptypes
viewGif.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired,
 
}

export default viewGif
