import React from 'react';

import Header from '../components/header/head';
import { Button } from '@mui/material';
import Boutton from '../components/bouton';


export default function HomePage() {
    return (
        <div>
            <Header />
            <h4>Rejoindre un événement</h4>
            <form>
                <input type="text" placeholder='entrer le code ici'/>
                <Boutton text={"Réjoindre"}/>
            </form>
            <h4>Ou créer un événement </h4>
            <Boutton text={"Créer un événement"} />
        </div>
    );
};
