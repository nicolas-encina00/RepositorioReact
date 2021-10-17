import React from 'react';
import Navbar from './Navbar'
import { Welcome } from './Welcome';
import Layout from './Layout';

const Home = () => {
    return (
        <>
            <Navbar />
            <Welcome title="Hola" text="bienvenido"/>

        <layout>
            <div>
                <h1>articulos</h1>
            </div>
        </layout>

            {/* <content /> */}
            {/* <footer /> */}
        </>   
    )
    
};

export default Home;
    