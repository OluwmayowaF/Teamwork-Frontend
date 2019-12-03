import React from 'react';

export default function article(props) {
    return (
            <div  >
              <h4 style={{float:'left'}}>{props.title}</h4>
              <p style={{float:'right'}}>{props.date}</p>
              <hr style={{clear:'both'}} />
              
              <div className="form-group">
              <textarea style={{background:'none', border:'none', overflow:'auto'}} 
              className="form-control" rows="50" name="editarticle" 
              defaultValue={props.article}
              onChange={props.onChange}
              >
              </textarea>
              <p >Written By: {props.author}</p>
             
            </div>
          </div>
    )
}
