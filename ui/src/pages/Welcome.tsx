import React from 'react';
// @ts-ignore
import globe from './rotating_globe.gif';

function Welcome() {
    return (
        <>
            <h1 className="text-center p-2">Welcome!</h1>
            <img className="mx-auto d-block" src={globe} alt="Rotating globe" />
        </>
    )
}

export default Welcome;