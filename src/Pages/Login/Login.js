import { async } from '@firebase/util';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

function Login() {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/register')
    }

    const handleForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    const emailRef = useRef('')
    const handleCode = async (event) => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)

    }

    if (user) {
        navigate('/')
    }
    let errorElement;
    if (error || error1) {
        errorElement = <p>error: {error.message}</p>
    }
    if (loading) {
        <Loading></Loading>
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center text-primary mt-5'>Please Login</h1>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                {errorElement}
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>You are New? <span> <Button onClick={handleNavigate} className='text-decoration-none' variant="link">Please Register</Button></span></p>

            <p className=''>Forget password <span> <Button onClick={handleCode} className='text-decoration-none' variant="link">Reset password</Button></span></p>
        </div>
    );
}

export default Login;