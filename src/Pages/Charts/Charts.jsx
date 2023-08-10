/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Charts = () => {
    return (
        <div className='min-h-screen flex flex-col gap-5 py-20 w-3/4 mx-auto'>
            <Link to='/' className='font-semibold'>--Go to Home</Link>
            <div>

                Chart here
            </div>
        </div>
    );
};

export default Charts;