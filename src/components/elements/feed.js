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

       
            <h4 className="text-primary float-left"> Title: {props.title}</h4><p className="text-dark float-right"><Moment date={props.date}/>   </p>
           <br />
            <div className="" style={{clear:'both'}}>
            {
                props.url  ?  
                <img className="" src={props.url} alt='gifImage'></img>
                : <p className="text-wrap text-truncate clearfix" >{props.article}  </p>                
            }
            </div>
            {
                props.url  ?  
                <Link style={{float:'right'}} to={`/dashboard/gif/${props.id}`}>View More</Link> 
                :  <Link  style={{float:'right'}} to={`/dashboard/article/${props.id}`}>View More</Link>  

               }
            
            
           
               
        </div>
        
        
    )
}

export default feed;