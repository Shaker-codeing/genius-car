import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className='text-center py-5'><small>copyright @{year}</small></p>
        </div>
    );
};

export default Footer;