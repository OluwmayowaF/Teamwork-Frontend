import React, { Component } from 'react'
import Article from '../../../components/elements/article'
import Comment from '../../../components/elements/comment'
import ArticleControl from '../../elements/articleControl'
import { viewArticleUrl } from '../../../components/apis'
import { getToken, authUser , loggedIn} from '../../auth'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react'


export class viewArticle extends Component {

    state ={
        article:null,
        loaded:false,
        addcomment:' ',
        newcomment:null,
        commentAdded:false,
        editarticle:'',
        owner:false,
    }

    componentDidMount =() => {
        this.getArticle();
        this.checkOwner();

    }

    checkOwner = (ownerId) =>{
        const thisUser = authUser.data.userId 
        if (thisUser === ownerId){
        this.setState({owner: true})
        console.log(thisUser)
        console.log(ownerId)
            
        }

    }

    getArticle = () => {
        const {articleid} = this.props.match.params

        
        const token = getToken();
         
        try{
            fetch(viewArticleUrl+articleid, {
                method:'GET',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": token
                },
            })
            .then(resp => resp.json())
            .then(data => {
                if (data){
                    
                    this.setState({article: data.data})
                    this.checkOwner(this.state.article.ownerid)
                    this.setState({loaded: true})
                    
                    console.log(data.data)
                  
                }
            })


        }catch(error){
            console.log(error)
        }
    }
    updatedArticle = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }

    editArticle =(e) => {
        e.preventDefault();
        const token = getToken();
        const {articleid} = this.props.match.params
        try{
            fetch(viewArticleUrl+articleid, {
                method:'PATCH',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": token
                },
                body: JSON.stringify({ 
                  article: this.state.editarticle,
              }),
            })
            .then(resp => resp.json())
            .then(data => {
                if (data){
                    this.getArticle()
                    console.log(data.data)
                  
                }
            })

        }catch{

        }


    }

   


    addComment = (e) => {
        e.preventDefault();
        const token = getToken();
        const {articleid} = this.props.match.params
        try{
            fetch(viewArticleUrl+articleid+'/comment', {
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
                    this.getArticle()
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

    deleteArticle = (e) => {
        //e.preventDefault();
        const token = getToken();
        const {articleid} = this.props.match.params
        try{
            fetch(viewArticleUrl+articleid, {
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
            <div>
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
                {
                   
                    this.state.loaded ?
                    <Article 
                    id={this.state.article.id}
                    title={this.state.article.title}
                    article={this.state.article.article}
                    comment={this.state.article.comments}
                    date={this.state.article.createdOn}
                    onChange={this.updatedArticle}
                    
                    isOwner={this.state.owner}
                    />
                   :
                    null
                }{
                    this.state.owner ?
                    <ArticleControl 
                    editArticle={this.editArticle}
                    deleteArticle={this.deleteArticle}
                    />:null
                }
                {  this.state.loaded ?
                    typeof this.state.article.comments === 'object' ? 
                    this.state.article.comments.map((comment ) =>(
                <Comment
                id = {comment.commentid} 
                comment={comment.comment}
                authorid={comment.authorid}
                />
                ))
                    :<p>{this.state.article.comments}</p>
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
        )}  

         commentBox = {
            

        }
}

export default viewArticle
