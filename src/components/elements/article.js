import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleControl from './articleControl'

export default function article(props) {

  
    return (
        
      <div className = "container">
        <div className="row" style={{paddingTop:'200px'}}>
            
            <div className="col">
            <section className="text-left">
              <h3  >{props.title}</h3>
              <p >Written By: Author</p>
              <div className="form-group">
              <textarea style={{background:'none', border:'none', overflow:'auto'}} 
              className="form-control" rows="3" name="editarticle" 
              defaultValue={props.article}
              onChange={props.onChange}
              
              >
              
              </textarea>

             
             
              
               
              
              </div>
                 
            </section>
            </div>
            <div className="col">


            </div>
            
        </div>
      </div>
        
    )
}
