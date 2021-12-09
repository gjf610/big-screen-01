import React from 'react';
import './home.scss';
import headerImage from '../images/header.png'
export const Home = () => {
    return (
        <div className="home">
            <header style={{ backgroundImage: `url(${headerImage})` }}></header>
        </div>
    );
};