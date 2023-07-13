import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';


const CheckOut = () => {
    const [user] = useAuthState(auth)
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const handleOrders = (event) => {
        event.preventDefault();
        const order = {
            name: user.name,
            email: user.email,
            service: service.name,
            phone: event.target.phone.value
        }
        const url = `http://localhost:5000/orders`
        axios.post(url, order)
            .then(response => {
                // console.log(response)
                const { data } = response;
                if (data.insertedId) {

                    event.target.reset();
                }
            })
    }
    return (
        <div className='text-center'>
            <h1 className='mt-5'>Please Checkout</h1>
            <form onSubmit={handleOrders}>
                <input className='w-50 mt-2' type="text" name='name' placeholder='Your Name' />
                <br />
                <input className='w-50 mt-2' value={user?.email} type="email" name="email" placeholder='Enter Email' id="" />
                <br />
                <input className='w-50 mt-2' value={service.name} type="text" name="service" placeholder='Service' id="" />
                <br />
                <input className='w-50 mt-2' type="number" name="phone" placeholder='Phone' id="" />
                <br />
                <input type="submit" value="Orders" />
            </form>
        </div>
    );
};

export default CheckOut;