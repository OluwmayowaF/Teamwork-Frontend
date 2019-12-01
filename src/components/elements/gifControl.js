import React from 'react'
import swal from '@sweetalert/with-react'

export default function gifControl(props) {
    const confirmDelete = () =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this gif file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                props.deleteGif()
            } 
          });
    }
    return (
        <React.Fragment>
          <button onClick={confirmDelete}>Delete</button>
        </React.Fragment>
    )
}
