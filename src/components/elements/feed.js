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
        
       
       <div className="articleContainer" >

       
            <h4 className="text-primary float-left"> Title: {props.title}</h4><p className="text-dark float-right">Posted <Moment fromNow date={props.date}  />   </p>
           <br />
            <div className="" style={{clear:'both'}}>
            {
                props.url  ?  
                <div className="text-center"><img  src={props.url} alt='gifImage'></img></div>
                : <p className="text-wrap text-truncate clearfix" >{props.article}  </p>                
            }
            </div>
            {
                props.url  ?  
                <Link style={{float:'left', textDecoration:'none'}} to={`/dashboard/gif/${props.id}`}>See More</Link> 
                :  <Link  style={{float:'left', textDecoration:'none'}} to={`/dashboard/article/${props.id}`}>See More</Link>  

               }
            
            
           
               
        </div>
        
        
    )
}

export default feed;