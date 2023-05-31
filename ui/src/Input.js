import React from 'react'

function Input({label, info, onClick}) {
    return (
        <div>
            <label htmlFor={label}>Enter a {label}: </label>
            {
                info.map(i => <input key={i.id} id={i.id} required type="text" name={i.name} placeholder={"Enter a " + i.name}/>)
            }
        </div>
    )
}

export default Input;