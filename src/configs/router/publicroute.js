import React from 'react'
import { Redirect, Route } from 'react-router'
const Publicroute = ({component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')
    return (
       <Route
       {...rest} render={(props)=>{
        if (!isAuth) {
            return <Component {...props}/>
        }
        else if (isAuth === 'true' && role === 'Kasir'){
            return <Redirect to={'/'}/>
        }
        else if (isAuth === 'true' && role ==='Admin'){
            return <Redirect to={'/home'}/>
        }
    }}/>
    )
}

export default Publicroute
