import { useState } from "react";
import SignInForm from '../components/login/signin';
import SignUpForm from '../components/login/SingUp';
import logo from '../assets/aia_logo.png'



export default function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className={`form-container ${isSignIn ? 'signin-active' : 'signup-active'}`}>
            {isSignIn ? <SignInForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
        </div>
    );
}
