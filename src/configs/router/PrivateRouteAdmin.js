import React from 'react'
import { Redirect, Route } from 'react-router'
const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')
    return (
        <Route
            {...rest} render={(props)=>{
            if(isAuth === 'true' && role === 'Admin'){
                // <Component {...props}/> 
                return  <Component  {...props}/> 
            }
            else if(isAuth === 'true' && role === 'Kasir'){
                return <Redirect to="/login"/>
            }
            else{
                return <Redirect to="/signin"/>
            }
    
    
            }}
        />
       
    )
}

export default PrivateRouteAdmin
