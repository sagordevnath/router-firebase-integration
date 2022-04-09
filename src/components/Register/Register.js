import React from 'react';
import "./Register.css"

const Register = () => {
    return (
        <div className="register">
            <h3>Please Register now</h3>
            <form>
                <input type="text" placeholder="Your Name" />
                <br />
                <br />
                <input type="email" placeholder="Your Email" />
                <br />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;