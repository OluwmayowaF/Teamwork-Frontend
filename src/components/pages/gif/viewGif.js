import React, { Component } from 'react'
import Gif from '../../../components/elements/gif'
import Comment from '../../../components/elements/comment'
import ArticleControl from '../../elements/articleControl'
import { viewGifUrl } from '../../../components/apis'
import { getToken, authUser , loggedIn} from '../../auth'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react'

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


    render() {
        return (
            <div>
                {
                    this.state.loaded ?
                    <Gif 
                id={this.state.gif.id}
                date={this.state.gif.createdOn}
                title={this.state.gif.title}
                url={this.state.gif.url}
                />:
                null

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
                <form onSubmit={this.addComment}>
                    <input style={this.commentBox} name='addcomment'type='text'
                    value={this.state.addcomment}
                    onChange={this.onChange}>
                    </input>

                    <button>Comment</button>

                </form>
           
                
            </div>
        )
    }
}

export default viewGif
