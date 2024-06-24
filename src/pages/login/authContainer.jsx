import React, { useState } from 'react';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';


export default function AuthContainer (){
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="box">
        {isLogin ? (
          <>
            <LoginForm />
            <button className="switch-button" onClick={toggleAuthMode}>
              Créer un compte
            </button>
          </>
        ) : (
          <>
            <RegisterForm />
            <button className="switch-button" onClick={toggleAuthMode}>
              Se connecter
            </button>
          </>
        )}
      </div>
    </div>
  );
};
