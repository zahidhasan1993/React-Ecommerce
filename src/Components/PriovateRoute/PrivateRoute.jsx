import React, { useContext } from 'react';
import { UserData } from '../Providers/AuthProvider';
import Login from '../Login/Login';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(UserData);
    const location = useLocation();
    console.log(location);
    if(loader){
        return <div className='flex justify-center items-center'><button className="btn loading">loading</button></div>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;