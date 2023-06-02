import React from 'react';

function Welcome() {
    return (
        <>
            <h1 className="text-center p-2">Welcome!</h1>
            <img className="mx-auto d-block" src={require('./rotating_globe.gif')} alt="Rotating globe" />
        </>
    )
}

export default Welcome;