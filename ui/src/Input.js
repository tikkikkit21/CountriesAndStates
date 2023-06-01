import React from 'react';

function Input({label, info, onClick}) {
    return (
        <div className="p-1">
            <label htmlFor={label}>Enter a {label}:</label>
            {
                info.map(i => <input className="mx-2" key={i.id} id={i.id} required type="text" name={i.name} placeholder={"Enter a " + i.name}/>)
            }
        </div>
    )
}

export default Input;