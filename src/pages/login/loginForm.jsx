import React from 'react';

export default function LoginForm(){
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
  );
};

