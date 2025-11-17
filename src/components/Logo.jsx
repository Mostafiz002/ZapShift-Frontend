import React from 'react';
import logo from '../assets/others/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className='flex items-end'>
            <img src={logo} alt="" />
            <h3 className='text-2xl font-semibold -mb-0.5  -ml-3 '>ZapShift</h3>
        </Link>
    );
};

export default Logo;