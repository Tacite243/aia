import React from 'react';

import Header from '../components/header/head';
import Boutton from '../components/bouton';


export default function HomePage() {
    return (
        <div className='homePage'>
            <Header />
            <div className='homePageContainer'>
                <form>
                    <h4>Rejoindre un événement</h4>
                    <input type="text" placeholder='entrer le code ici' />
                    <Boutton text={"Réjoindre"} />
                </form>
                <h4>Ou créer un événement </h4>
                <Boutton text={"Créer un événement"} />
            </div>
        </div>
    );
};
