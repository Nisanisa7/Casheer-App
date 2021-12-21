import React from 'react'
import { Redirect, Route } from 'react-router'
const PrivateRouteKasir = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')
    return (
        <Route
       {...rest} render={(props)=>{
        if(isAuth === 'true' && role === 'Kasir'){
            // <Component {...props}/> 
            return  <Component  {...props}/> 
        }
        else if(isAuth === 'true' && role === 'Admin'){
            return <Redirect to="/signin"/>
        }
        else{
            return <Redirect to="/login"/>
        }
       }}
    
       
       
       />
    )
}

export default PrivateRouteKasir
