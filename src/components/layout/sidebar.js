import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { authUser, loggedIn} from '../auth'




function Sidebar(props) {
   /* const GetUserName = () =>{
    let UserName = `${authUser.data.firstname} ${authUser.data.lastname}`;
     return  UserName
    }*/


    
             
     
  

   
    return (
        <aside className="col-md-1 d-none d-md-block bg-dark sidebar" style={{width:'20%', height:'100vh', float:'left'}}  >
        <div className="sidebar-stick"  >
            
        <ul className="nav flex-column">
        {/*
            loggedIn() === false ? null :
            <li className="nav-item">
          <Link className="nav-link pb-5" to="#">
                <h3 className='text-center'>Hi, {loggedIn === true ? 
                    `${authUser.data.firstname} ${authUser.data.lastname}`:
                    null}
                </h3>
                </Link> 
          </li>*/
            }

            <li className="nav-item" style={{paddingBottom:'80px'}}>
            <Link className="nav-link text-center" to="/dashboard/myposts">
                <img src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1575328023/TeamWorkFE/032-networking-1_1_lmbiq3.svg' alt='logo' />
                </Link>
            </li>
          
          
          <li className="nav-item text-center linkPadding">
          <Link className="nav-link" to="/dashboard">
                 <img src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1575328023/TeamWorkFE/home_vector_1_af1lwo.svg' alt='Home' >
                 </img>
                </Link>
          </li>
         
          <li className="nav-item linkPadding text-center">
          <Link className="nav-link" to="/dashboard/createEmployee">
          <img src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1575328023/TeamWorkFE/case_vector_1_qhbhsf.svg' alt='Home' >
                 </img>
                </Link>
          </li>
         
          <li className="nav-item linkPadding text-center">
          <Link className="nav-link" to="/dashboard/postarticle">
          <img src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1575328023/TeamWorkFE/note-text_vector_1_iwxiu2.svg' alt='Home' >
                 </img>
               </Link>
          </li>
          <li className="nav-item linkPadding text-center">
          <Link className="nav-link" to="/dashboard/postgif">
          <img src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1575328023/TeamWorkFE/smiled_vector_1_etsr3w.svg' alt='Home' >
                 </img>
                </Link>
          </li>
          <li className="nav-item linkPadding text-center">
          <Link className="av-link" onClick={props.logOut} to="#">
                
               
          <img src='https://res.cloudinary.com/oluwamayowaf/image/upload/v1575328023/TeamWorkFE/logout_1_c2wc4h.svg' alt='Home' >
                 </img>
                </Link>
            </li>
        </ul>

        </div>
    </aside>
        
    )

   
}
//Proptypes
Sidebar.propTypes = {
    logOut: PropTypes.func.isRequired,
    // UserName: PropTypes.string.isRequired
 
}


export default withRouter(Sidebar);
