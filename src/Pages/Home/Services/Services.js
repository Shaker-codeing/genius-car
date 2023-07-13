import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const getServices = () => {
            axios.get('http://localhost:5000/service')
                .then(response => {
                    setServices(response.data)
                })
        }
        getServices()
    }, [])
    return (
        <div id='services'>
            <h2 className='text-primary text-center'>Our Services</h2>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services; 