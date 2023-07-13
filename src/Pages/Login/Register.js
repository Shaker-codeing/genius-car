import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { useState } from 'react';

function Register() {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/login')
    }

    const handleFrom = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }
    }

    if (user) {
        navigate('/')
    }
    let errorElement;
    if (error) {
        errorElement = <p>error: {error.message}</p>
    }
    if (loading) {
        <Loading></Loading>
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center text-primary mt-5'>Please Register</h1>
            <Form onSubmit={handleFrom}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label htmlFor="terms">Terms and condition</label>
                {errorElement}

                <Button
                    disabled={!agree}
                    className='w-50 mt-2 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>Already have an account <span> <Button onClick={handleNavigate} className='text-decoration-none' variant="link">Please Login</Button></span></p>
        </div>
    );
}

export default Register;