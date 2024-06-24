import React from 'react';

export default function RegisterForm(){
  return (
    <form>
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <button type="submit">Créer un compte</button>
    </form>
  );
};
