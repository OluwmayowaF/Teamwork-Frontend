import React from 'react'
import swal from 'sweetalert'

export default function articleControl(props) {

    const confirmDelete = () =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this article!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                props.deleteArticle()
            } 
          });
    }
    return (
        <React.Fragment>
          <button className='btn-block' onClick={props.editArticle}>Edit</button>  
          <button onClick={confirmDelete}>Delete</button>
        </React.Fragment>
    )
}
