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
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <button  onClick={props.editArticle}>Edit</button>  
          <button onClick={confirmDelete}>Delete</button>
  </div>
</div>
          
        </React.Fragment>
    )
}
