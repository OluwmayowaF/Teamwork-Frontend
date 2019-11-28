import React, { Component } from 'react'
import Article from '../../../components/elements/article'
import { viewArticleUrl } from '../../../components/apis'
import { getToken } from '../../../components/auth'

export class viewArticle extends Component {

    state ={
        article:null,
        loaded:false
    }

    componentDidMount =() => {
        const {articleid} = this.props.match.params

        console.log(articleid) // "foo"
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
    render() {
        return (
            <div>
                {
                   
                    this.state.loaded ?
                    <Article 
                    id={this.state.article.title}
                    title={this.state.article.title}
                    article={this.state.article.article}
                    comment={this.state.article.comments}
                    date={this.state.article.createdOn}
                    />
                   :
                    null
                }
                

            </div>
        )}  
}

export default viewArticle
