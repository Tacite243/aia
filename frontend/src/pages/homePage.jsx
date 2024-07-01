import React from 'react';

import Header from '../components/header/head';
import Boutton from '../components/bouton';


export default function HomePage() {
    return (
        <div className='homePage'>
            <Header />
            <div className='homePageContainer'>
                <form>
                    <h4 className='home-title'>Rejoindre un événement</h4>
                    <dev className="join-form">
                        <input type="text" placeholder='entrer le code ici' />
                        <Boutton text={"Réjoindre"} type='submit' />
                    </dev>
                </form>
                <h4 className='home-title'>Ou créer un événement </h4>
                <Boutton text={"Créer un événement"} type='submit' />
            </div>
        </div>
    );
};
