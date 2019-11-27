

   // const authUser =  JSON.parse(localStorage.getItem('user'));

    export const saveUser = (user) =>{
        localStorage.setItem('T_T_W', JSON.stringify(user));
        
    }

    export const getToken = () =>{
        
      const user =  JSON.parse(localStorage.getItem('T_T_W'))
      const token = user.data.token
      return token
    }

    export const loggedIn = () =>{
       
        if(localStorage.getItem('T_T_W') === null){
            return false 
        }else {
            return true
        }
    }

    export const adminAuth = () => {
        const adminRole = localStorage.getItem('T_T_W.role')
        console.log(adminRole)
    }

    export const  logOut = () => {
        localStorage.removeItem('T_T_W');
        this.props.history.push('/login');
        
    }



