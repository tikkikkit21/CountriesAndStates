import React from 'react';

function DropButton({name, handleClick}) {
    return <button className="dropButton" onClick={handleClick}>{name}</button>;
}

export default DropButton;