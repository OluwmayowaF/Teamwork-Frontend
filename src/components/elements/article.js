import React from 'react';
import ArticleControl from '../../components/elements/articleControl';
import CommentForm from '../elements/commentForm';
import Moment from 'react-moment';

export default function article(props) {
  const control =()=>{
   if(props.isOwner === true){
     return <ArticleControl 
     editArticle={props.editArticle}
     deleteArticle={props.deleteArticle}
     />
   }else {
     return null;
   }
   

  
    
}
    return (
            <div  >
              <div style={{float:'left'}}> 
              <h4 >{props.title}</h4>
              
              </div>
              <p style={{float:'right'}}>{control()}</p>
             
              <p className='text-right float-right'>
                Posted by {props.author}<br />
                <Moment fromNow date={props.date}  />
                </p>
              
              <hr style={{clear:'both'}} />
              
              <div className="form-group">
              <p style={{background:'none', border:'none', overflow:'auto'}}>
              {props.article}
              </p>
              <textarea style={{background:'none', border:'none', overflow:'auto'}} 
              className="form-control" rows="5" name="editarticle" 
              defaultValue={props.article}
              onChange={props.onChange}
              hidden>
              </textarea>
             <CommentForm 
             addComment={props.addComment}
             onChange={props.onChange}/>
             
            </div>
          </div>
    )
}
