import React from 'react';

const Social = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary '></div>
                <span className='mt-2 px-4'>or</span>
                <div style={{ height: '1px' }} className='w-50 bg-primary '></div>
            </div>
            <button className='bg-primary d-block w-50 rounded mt-4 mx-auto'>Google</button>
            <button className='bg-success text-primary d-block w-50 rounded mt-4 mx-auto'>Github</button>


        </div>
    );
};

export default Social;