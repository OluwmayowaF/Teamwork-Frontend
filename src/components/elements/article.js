import React from 'react';
import '../../App.css'


function article(props) {
    return (
        <div className='articleContainer' key={props.id}>
            <h3>
                {props.title}
            </h3>
            {
                props.url  ?  
                <img src={props.url} alt='gifImage'></img>
                : <p>{props.article} </p>                
            }
            <h4>
               posted by {props.authorId} on {props.date}
            </h4>
            
            
        </div>
    )
}

export default article;