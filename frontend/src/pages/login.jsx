import { useState } from "react";
import SignInForm from '../components/login/signin';
import SignUpForm from '../components/login/SingUp';

export default function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="login-page">
            <div className="login">
                <div className="overlay"></div>
                <div className={`form-container ${isSignIn ? 'signin-active' : 'signup-active'}`}>
                    {isSignIn ? <SignInForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
                </div>
            </div>
        </div>
    );
}
