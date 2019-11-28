import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function article(props) {
    return (
        
      <div className = "container">
        <div className="row" style={{paddingTop:'200px'}}>
            
            <div className="col">
            <section className="text-left">
              <h3  >{props.title}</h3>
              <p >Written By: Author</p>
              <div className="form-group">
              <textarea style={{background:'none', border:'none', overflow:'auto'}} className="form-control" rows="3" id="comment" 
              value={props.article}
              readOnly>
              
              </textarea>
              {
                typeof props.comment === 'object' ?
                props.comment.map((comments ) =>(
                  <p key={comments.commentid}>{comments.comment}</p>
                )):
                <p>{props.comment}</p>
              }
              
               
              
              </div>
                  <button>Comment</button>
            </section>
            </div>
            <div className="col">


            </div>
            
        </div>
      </div>
        
    )
}
