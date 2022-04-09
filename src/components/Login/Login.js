import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Login</h2>
            <form>                
                <input type="email" placeholder="Your Email" />
                <br />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
            <br />            
            <button onClick={()=>signInWithGoogle()}>Google Sign In</button>
        
        </div>
    );
};

export default Login;