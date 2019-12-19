import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import { loggedIn }   from '../../auth';
import AddArticleForm from './addArticleform';
import { addArticleUrl     } from '../../apis';
import { getToken  } from '../../auth';
// import ClipLoader from 'react-spinners/ClipLoader';
import swal from 'sweetalert'


export class addArticle extends Component{
    state ={
        title: '',
        article: '',
        category: 'General',
        addBtn: 'Post Article',
    }

    onChangeArticle = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }


    addArticle = (e) => {
        this.setState({addBtn: 'Posting..'
      })
        e.preventDefault();
        const token = getToken();
        fetch(addArticleUrl, 
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
            },
            body: JSON.stringify({ 
                title: this.state.title,
                article: this.state.article,
                tag: this.state.category,
            }),
            })

            .then(resp => resp.json())
            .then(data => { 
                this.setState({addBtn: 'Post Article'})
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
                    this.setState({  title: '',
                        article: '' })
                    swal({
                    
                        text: `${data.data.message}`,
                        icon: "success",
                      });
                    this.props.history.push(`/dashboard/article/${data.data.articleId}`)
                    console.log(data.data)

                }
            })
        }

    render(){
    return (
        <div>
        {
            loggedIn() === false ? <Redirect to="/login" /> : null
            }
            <Header pageTitle='Add An Article' HeaderIcon={<button className='backBtn' onClick={() => this.props.history.goBack()}>BACK</button>}/> 
            <Sidebar logOut={this.props.logOut} UserName={this.props.UserName} />
          
            <AddArticleForm  title={this.state.title} article={this.state.article} category={this.state.category} 
            onChange={this.onChangeArticle}  onSubmit={this.addArticle} AddBtnUx={this.state.addBtn} />
            
            
        </div>
    )
  }
}

//Proptypes
addArticle.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired
 
}

export default withRouter(addArticle)