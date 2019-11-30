import React, { Component } from 'react'
import Gif from '../../../components/elements/gif'
import Comment from '../../../components/elements/comment'
import GifControl from '../../elements/gifControl'
import { viewGifUrl } from '../../../components/apis'
import { getToken, authUser , loggedIn} from '../../auth'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import Sidebar from '../../layout/sidebar'

export class viewGif extends Component {

    state ={
        gif:null,
        loaded:false,
        addcomment:' ',
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
                  comment: this.state.addcomment,
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
            <div >
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Sidebar style={{width:'10%',  float:'right'}}  />
            <div className="container"  style={{float:'right', width:'80%'}}>
                {
                    this.state.loaded ?
                    <React.Fragment>
                    <Gif 
                id={this.state.gif.id}
                date={this.state.gif.createdOn}
                title={this.state.gif.title}
                url={this.state.gif.url}
                />
                <form onSubmit={this.addComment}>
                    <input style={this.commentBox} name='addcomment'type='text'
                    value={this.state.addcomment}
                    onChange={this.onChange}>
                    </input>

                    <button>Comment</button>

                </form>
                </React.Fragment>
                :null

                }
                {
                    this.state.owner ?
                    <GifControl 
                    
                    deleteGif={this.deleteGif}
                    />:null
                }
                {  this.state.loaded ?
                    typeof this.state.gif.comments === 'object' ? 
                    this.state.gif.comments.map((comment ) =>(
                <Comment
                id = {comment.commentid} 
                comment={comment.comment}
                authorid={comment.authorid}
                />
                ))
                    :<p>{this.state.gif.comments}</p>
                    :
                    null
                }
              
                </div>
                
            </div>
        )
    }
}

export default viewGif
