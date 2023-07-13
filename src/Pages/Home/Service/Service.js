import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { _id, name, price, description, img } = service;
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Price: $<strong>{price}</strong></p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateServiceDetail(_id)} className='bg-primary rounded'>Book service</button>
        </div>
    );
};

export default Service;