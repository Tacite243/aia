import { useState } from "react";
import SignInForm from '../components/login/signin';
import SignUpForm from '../components/login/SingUp';
import logo from '../assets/aia_logo.png'


{/* <div className={`form-container ${isSignIn ? 'signin-active' : 'signup-active'}`}>
    {isSignIn ? <SignInForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
</div> */}

export default function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="w-full h-screen  flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className="text-4xl font-bold my-4">AIA ConfApp</h1>
                    <p className="text-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <img src={logo} className="w-full h-full object-cover" />
            </div>

            <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-betweencitems-center">
                <h1 className="text-x1 text-[#060606] font-semibolod">Interactive part</h1>


                <div className="w-full flex flex-col max-w-[400px]">
                    <div className="w-full flex flex-col mb-2">
                        <h3 className="text-3xl font-semibold mb-2">Login</h3>
                        <p className="text-base mb-2">Bienvenue sur AIA CoanApp! Créer un compte ou bien entrez vos informations de connexion pour vous connecter</p>
                    </div>
                    <div className="w-full flex flex-col">
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Mot de pass"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                        />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <div className="w-full flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 mr-2"
                            />
                            <p className="text-sm">Remende me</p>
                        </div>
                        <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"> forgot password ?</p>
                    </div>
                    <div className="w-full flex flex-col my-4">
                        <button className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center font-semibold justify-center cursor-pointer">Log in</button>
                        <button className="w-full text-[#060606] my-2 bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">Sign up</button>
                    </div>
                    <div className="w-full flex items-center justy-center relative py-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="text-lg  absolute text-black/80 bg-[#f5f5f5]">or</p>
                    </div>
                    <div className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/80 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google logo" className="h-6 mr-2" />
                        se connecter avec google</div>
                    <div className="w-full flex items-center justify-center">
                        <p className="text-sm font-normal text-[#060606]">Don't have a account ? <span className="font-semibold underline underline-offset"></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
