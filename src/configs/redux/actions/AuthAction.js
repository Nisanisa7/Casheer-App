import Swal from "sweetalert2";
import axios from 'axios'
import * as string from '../string'

export const LoginUser = (data, history) => (dispatch)=> {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/auth`, data)
    .then((res)=>{
        const name = res.data.data.name;
        const email = res.data.data.email;
        const image = res.data.data.image;
        const status = res.data.data.status;
        const role = res.data.data.role;
        const isAuth = true
        const dataUser = res.data.data

        if(role === 'Admin'){
                Swal.fire({
                icon: 'error',
                title: 'Boo Boo',
                text: 'You dont have permission to access this side',
              })
            return 
        }
    
        dispatch({type:'LOGIN', payload: dataUser})
        localStorage.setItem('name', name); 
        localStorage.setItem('email', email); 
        localStorage.setItem('image', image); 
        localStorage.setItem('status', status); 
        localStorage.setItem('role', role);
        console.log(dataUser, 'action');
        localStorage.setItem('isAuth', isAuth);
            history.push('/',
            Swal.fire(
                'Welcome',
                'Welcome',
                'success'
              )
           )
    })
    .catch((error)=>{
      console.log(error);
        dispatch({type: 'LOGIN', payload: error.response})
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response?.data?.error?.message,
          })
    })
}

export const RegisterKasir = (data, history)=>(dispatch) => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/register`, data)
    .then((res)=>{
        const result = res.data.data
        console.log(result);
        dispatch({type:string.REGISTER_KASIR, payload: result})
        Swal.fire(
          'Registration success!',
          'Login to enjoy our feature!',
          'success'
        )
        history.push('/login')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type:string.REGISTER_KASIR, payload: error})
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
    })
}

export const Loginadmin = (data, history) => (dispatch)=> {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/auth`, data)
    .then((res)=>{
        const name = res.data.data.name;
        const email = res.data.data.email;
        const image = res.data.data.image;
        const status = res.data.data.status;
        const role = res.data.data.role;
        const isAuth = true
        const dataUser = res.data.data

        if(role === 'Kasir'){
            Swal.fire({
          icon: 'error',
          title: 'Boo Boo',
          text: 'You dont have permission',
        })
        return 
      }

        dispatch({type:string.LOGIN_ADMIN, payload: dataUser})
        localStorage.setItem('name', name); 
        localStorage.setItem('email', email); 
        localStorage.setItem('image', image); 
        localStorage.setItem('status', status); 
        localStorage.setItem('role', role);
        localStorage.setItem('isAuth', isAuth);
            history.push('/home',
            Swal.fire(
                'Welcome',
                'Welcome',
                'success'
              )
           )
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: string.LOGIN_ADMIN, payload: error.response})
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error.message,
          })
    })
}

export const RegisterAdmin = (data, history)=>(dispatch) => {
  axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/registerAdmin`, data)
  .then((res)=>{
      const result = res.data.data
      console.log(result);
      dispatch({type:string.REGISTER_ADMIN, payload: result})
      Swal.fire(
        'Registration success!',
        'Login to enjoy our feature!',
        'success'
      )
      history.push('/signin')
  })
  .catch((error)=>{
      console.log(error.response);
      dispatch({type:string.REGISTER_ADMIN, payload: error})
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
  })
}