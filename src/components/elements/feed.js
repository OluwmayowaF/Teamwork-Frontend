import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'



function feed(props) {

   
    return (
        <div className='articleContainer'  >
            <h3>
                {props.title}
            </h3>
            {
                props.url  ?  
                <img src={props.url} alt='gifImage'></img>
                : <p>{props.article}  </p>                
            }
            <h4>
               posted by {props.authorId} on {props.date} <br/>
               {
                props.url  ?  
                null
                :  <Link to={`/dashboard/article/${props.id}`}>View More</Link>  

               }
              
            </h4>
             
        </div>
    )
}

export default feed;