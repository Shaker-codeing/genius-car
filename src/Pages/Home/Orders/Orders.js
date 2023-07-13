import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    // console.log(orders)
    useEffect(() => {
        const getOrders = () => {
            const email = user?.email;
            const url = `http://localhost:5000/orders?email=${email}`
            axios.get(url)
                .then(response => {
                    setOrders(response.data)
                })
        }
        getOrders()
    }, [orders])

    return (
        <div className='text-center'>
            <p>{user.email}</p>
            <h2>{orders.length} {orders?.service}</h2>
        </div>
    );
};

export default Orders;