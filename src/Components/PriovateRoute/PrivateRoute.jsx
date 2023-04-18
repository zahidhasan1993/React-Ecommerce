import React, { useContext } from 'react';
import { UserData } from '../Providers/AuthProvider';
import Login from '../Login/Login';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(UserData);
    if(loader){
        return <div className='flex justify-center items-center'><button className="btn loading">loading</button></div>
    }
    if(user){
        return children;
    }

    return <Login></Login>
};

export default PrivateRoute;