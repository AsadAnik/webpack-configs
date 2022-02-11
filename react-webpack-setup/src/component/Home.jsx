import React from 'react';
import customStyle from '../styles/style.module.scss';

// Home Funcational Component..
const Home = ({ devname, devpro }) => {
    return (
        <>
            <h1 className={customStyle.textColorRed}>This is Home</h1>
            <h3>
                <p>{devname}</p>
                <p>{devpro}</p> 
            </h3>
        </>
    );
}

export default Home;