import React, { Component } from 'react'
import Article from '../../../components/elements/article'
import Comment from '../../../components/elements/comment'
import Sidebar from '../../layout/Sidebar'
import ArticleControl from '../../elements/articleControl'
import { viewArticleUrl } from '../../../components/apis'
import { getToken, authUser , loggedIn} from '../../auth'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import {ClipLoader} from 'react-spinners';
import PropTypes from 'prop-types';


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

    token = getToken();

    componentDidMount =() => {
        this.getArticle();
        this.checkOwner();
        

    }

    checkOwner = (ownerId) =>{
        const thisUser = authUser.data.userId 
        if (thisUser === ownerId){
        this.setState({owner: true})
        }
    }
  

    getArticle = () => {
        const {articleid} = this.props.match.params
        try{
            fetch(viewArticleUrl+articleid, {
                method:'GET',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": this.token
                },
            })
            .then(resp => resp.json())
            .then(data => {
                if (data){ 
                    this.setState({article: data.data})
                    this.checkOwner(this.state.article.ownerid)
                    this.setState({loaded: true})
                }
            })


        }catch(error){
            swal(
                <div>
                  <h3>Something doesn't seem right</h3>        
                  <p>Please check your internet connection and try again</p>
                </div>
              )
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
            <div >
            {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
            <div className="container "  style={{float:'right', width:'80%'}}>
                {
                   
                    this.state.loaded ?
                    <Article  
                    id={this.state.article.id}
                    title={this.state.article.title}
                    article={this.state.article.article}
                    comment={this.state.article.comments}
                    date={this.state.article.createdOn}
                    onChange={this.updatedArticle}
                    author = {this.state.article.ownername}
                    isOwner={this.state.owner}
                    />
                   :
                   <div className='sweet-loading' style={{margin:'20% 50%'}}>
              <ClipLoader
             //css={override}
              sizeUnit={"px"}
               size={200}
              color={'#0659FB'}
               loading={this.state.loading}
               />
      </div> 
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
                date={comment.createdOn}
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
            </div>
        )}  

         commentBox = {
            

        }
}
//Proptypes
viewArticle.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired,
 
}
export default viewArticle
