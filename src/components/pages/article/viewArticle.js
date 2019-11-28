import React, { Component } from 'react'
import Article from '../../../components/elements/article'
import Comment from '../../../components/elements/comment'
import { viewArticleUrl } from '../../../components/apis'
import { getToken } from '../../../components/auth'

export class viewArticle extends Component {

    state ={
        article:null,
        loaded:false,
        addcomment:' ',
        newcomment:null,
        commentAdded:false,
    }

    componentDidMount =() => {
        this.getArticle();

    }

    getArticle =() => {
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
                    this.setState({loaded: true})
                    console.log(data.data)
                  
                }
            })


        }catch(error){
            console.log(error)
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

    render() {
        return (
            <div>
                {
                   
                    this.state.loaded ?
                    <Article 
                    id={this.state.article.id}
                    title={this.state.article.title}
                    article={this.state.article.article}
                    comment={this.state.article.comments}
                    date={this.state.article.createdOn}
                    />
                   :
                    null
                }{  this.state.loaded ?
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
