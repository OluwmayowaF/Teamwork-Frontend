import React from 'react'

export default function comment(props) {
    
    return (
        <div>
            <div className='commentContainer' key={props.id} style={{paddingBottom:'30px'}}>
                <table >
                    <tbody>
                    <tr >
                        <td style={{paddingRight:'30px'}}>
                        
                            <button className=' avatar'> {`${props.authorName}`.charAt(0)}</button>
                           
                        </td>
                        <td>
                        <h5>{props.authorName}</h5>
                        <p>{props.comment}</p>
                            
                        </td>
                    </tr>
                    </tbody>
                </table>
                
               
            </div>
            
        </div>
    )
}
