import React from 'react'
import { ClipLoader } from 'react-spinners';

export default function loadingScreen(props) {
    return (
        <div className='text-center loadingscreen' >
            <div className='sweet-loading' >
            <ClipLoader
             //css={override}
              sizeUnit={"px"}
               size={100}
              color={'#0659FB'}
               loading={props.loading}
               />
               <p style={{color:'#D0D0D0'}}>Please Hold on a minute while we fetch you some data</p>
               </div>
               </div>
            
       
    )
}
