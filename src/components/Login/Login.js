import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
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
            <button onClick={signInWithGoogle}>Google Sign In</button>
        
        </div>
    );
};

export default Login;