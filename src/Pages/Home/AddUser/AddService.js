import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const AddService = () => {
    const [service, setService] = useState([])
    const handleService = event => {
        event.preventDefault()
        const service = {
            name: event.target.service.value,
            img: event.target.img.value,
            description: event.target.description.value,
            price: event.target.price.value,
        }
        setService(service)
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='w-50 mx-auto'>
            <Helmet>
                <title>AddService</title>
            </Helmet>
            <form onSubmit={handleService}>
                <input className='w-50 mt-2' type="text" name='service' placeholder='service name' />
                <br />
                <input className='w-50 mt-2' type="text" name="img" placeholder='Img URL' id="" />
                <br />
                <input className='w-50 mt-2' type="text" name="description" placeholder='description' id="" />
                <br />
                <input className='w-50 mt-2' type="number" name="price" placeholder='price' id="" />
                <br />
                <input type="submit" value="Addservice" />
            </form>
        </div>
    );
};

export default AddService;