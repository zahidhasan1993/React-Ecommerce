import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='mb-20'><Header></Header></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;