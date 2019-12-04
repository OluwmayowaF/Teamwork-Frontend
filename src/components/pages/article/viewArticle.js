import React, { Component } from 'react'
import Article from '../../../components/elements/article'
import Comment from '../../../components/elements/comment'
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import ArticleControl from '../../elements/articleControl'
import { viewArticleUrl } from '../../../components/apis'
import { getToken, authUser , loggedIn} from '../../auth'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import LoadingScreen from '../../elements/loadingScreen'
import PropTypes from 'prop-types';
// import CommentForm from '../../elements/commentForm';



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
            <div style={{width:'91.5%', float:'right'}}>
                <Header />
                {
                   
                    this.state.loaded ?
                    <div style={{width:'60%'}}className='allFeed'>
                    <Article  
                    id={this.state.article.id}
                    title={this.state.article.title}
                    article={this.state.article.article}
                    comment={this.state.article.comments}
                    date={this.state.article.createdOn}
                    onChange={this.updatedArticle}
                    author = {this.state.article.ownername}
                    isOwner={this.state.owner}
                    editArticle={this.editArticle}
                    deleteArticle={this.deleteArticle}

                    />
                    {
                    this.state.owner ?
                    <ArticleControl 
                    editArticle={this.editArticle}
                    deleteArticle={this.deleteArticle}
                    />:null
                } {
                    this.state.owner ?
                    <ArticleControl 
                    editArticle={this.editArticle}
                    deleteArticle={this.deleteArticle}
                    />:null
                }
                   
                    </div>
                   : <LoadingScreen />                
                   }
                   
                   <div style={{width:'60%'}} >
                   {
                    this.state.owner ?
                    <ArticleControl 
                    editArticle={this.editArticle}
                    deleteArticle={this.deleteArticle}
                    />:null
                }
                </div>
                <div style={{width:'60%', margin:'auto'}}>
                    
                {  this.state.loaded ?
                    typeof this.state.article.comments === 'object' ? 
                    this.state.article.comments.map((comment ) =>(
                <Comment
                id = {comment.commentid} 
                comment={comment.comment}
                authorid={comment.authorid}
                authorName= {`${comment.firstname} ${comment.lastname}`}
                date={comment.createdOn}
                />
               
                )) 
                
                    :<React.Fragment>
                    <p>{this.state.article.comments}</p></React.Fragment>
                    :
                    null
                }
                </div>
               
                
                </div>
            </div>
        )}  

        
}
//Proptypes
viewArticle.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired,
 
}
export default viewArticle
