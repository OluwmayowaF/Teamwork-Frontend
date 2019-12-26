import React from 'react';
import Moment from 'react-moment';

export default function comment(props) {
    
    return (
        <div>
            <div className='commentContainer' key={props.id} >
                <table >
                    <tbody>
                    <tr >
                        <td style={{paddingRight:'30px'}}>
                        
                            <button className=' avatar'> {`${props.authorName}`.charAt(0)}</button>
                           
                        </td>
                        <td style={{width:'500px'}}>
                        <h5 className="text-dark float-left">{props.authorName}</h5>
                        <p className="text-dark float-right" style={{fontSize:'10px'}}> <Moment fromNow date={props.date}  />  </p>
                        <p style={{clear:'both'}}>{props.comment}</p>
                            
                        </td>
                    </tr>
                    </tbody>
                </table>
                
               
            </div>
            
        </div>
    )
}
