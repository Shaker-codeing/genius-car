
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth)
    // console.log(user)
    const location = useLocation();
    if (loading) {
        return (<Loading></Loading>)
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <div className='text-center'>
            <h2 className='text-dander'> Your Email is Not Verified</h2>
            <h5 className='success'>Please Verify Your Email</h5>
            <button
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        alert('Sent email');
                    }
                }}
            >
                Verify email
            </button>

        </div>
    }
    return children;



};

export default RequireAuth;