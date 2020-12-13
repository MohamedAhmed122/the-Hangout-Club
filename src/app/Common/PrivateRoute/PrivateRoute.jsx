import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import UnAuthModal from "../Modal/AuthModal";


const  PrivateRoute =({component: Component, ...rest})=>{
    const {isAuthenticated} = useSelector(state => state.auth)
    return(
        <Route
            {... rest}
            render={(props) => isAuthenticated? <Component {...props}/> : <UnAuthModal  {...props}/>}    
        />
    )
}
export default PrivateRoute
