import React from 'react';

export default function article(props) {
    return (
            <div className="articleContainer" >
              <h4>Title:{props.title}</h4>
              <p >Written By: {props.author}</p>
              <div className="form-group">
              <textarea style={{background:'none', border:'none', overflow:'auto'}} 
              className="form-control" rows="3" name="editarticle" 
              defaultValue={props.article}
              onChange={props.onChange}
              >
              </textarea>
             
            </div>
          </div>
    )
}
