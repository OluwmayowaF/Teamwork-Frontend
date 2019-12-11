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
  <button className="btn  dropdown-toggle" style={{backgroundColor:'#4D6488', color:'#fff'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <button className="btn btn-outline-dark" onClick={props.editArticle}>Edit</button>  
  <br />
  <button className="btn btn-outline-danger"  onClick={confirmDelete}>Delete</button>
  </div>
</div>
          
        </React.Fragment>
    )
}
