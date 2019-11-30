import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import * as moment from 'moment';


function feed(props) {
   
  /*  const dateString = (time) =>{
        let day = moment([time]);
        return day 
      //let  post = new Date();
       //return   moment.format(time)
    }*/
   
    return (
        
        <div className="container pt-5" style={{width:'80%', float:'right'}}>
        <div className='row'>
        <div className='col-1'></div>
       <div className="articleContainer col-8">

       
            <h4 className="text-primary"> Title: {props.title}</h4>
           
            <div className="">
            {
                props.url  ?  
                <img className="center-block" src={props.url} alt='gifImage'></img>
                : <p className="text-wrap text-truncate" >{props.article}  </p>                
            }
            {
                props.url  ?  
                <Link style={{float:'right'}} to={`/dashboard/gif/${props.id}`}>View More</Link> 
                :  <Link  style={{float:'right'}} to={`/dashboard/article/${props.id}`}>View More</Link>  

               }
            </div>
            <p className="text-dark"><Moment date={props.date}/>   </p>
           
               </div>
               <div className='col-3'></div>
               </div>
        </div>
        
        
    )
}

export default feed;