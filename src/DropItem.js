import React from 'react';

function DropItem({name, handleClick}) {
    return <button className="dropItem" onClick={handleClick}>{name}</button>;
}

export default DropItem;