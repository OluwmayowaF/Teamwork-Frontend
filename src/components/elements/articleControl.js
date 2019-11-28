import React from 'react'

export default function articleControl(props) {
    return (
        <React.Fragment>
          <button onClick={props.editArticle}>Edit</button>  
          <button>Delete</button>
        </React.Fragment>
    )
}
