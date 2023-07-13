import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';


const ServiceDetail = () => {

    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)

    return (
        <div className='text-center'>
            <h2>This is ServiceDetails: {service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>

        </div>
    );
};

export default ServiceDetail;