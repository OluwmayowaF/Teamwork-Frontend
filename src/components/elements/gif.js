import React from 'react'
import GifControl from '../../components/elements/articleControl';
import Moment from 'react-moment';

export default function gif(props) {
    const control =()=>{
        if(props.isOwner === true){
          return <GifControl 
          deleteArticle={props.deleteGif}
          />
        }else {
          return null;
        }
    }
    return (
        <div>
        <div style={{float:'left'}}> 
              <h4 >{props.title}</h4>
              
              </div>
              <p style={{float:'right'}}>{control()}</p>
              <p className='text-right float-right'>
                Posted by {props.author}<br />
                <Moment fromNow date={props.date}  />
                </p>
              
              <hr style={{clear:'both'}} />
            <img width='80%' src={props.url} alt='gifImage'></img>
        </div>
    )
}
