import React from 'react';

function Dropdown({id, menuLabel, data, onChange}) {
    return (
        <div className="dropdown">
            <label htmlFor={menuLabel}>Choose a {menuLabel}: </label>
            <select name={id} id={id} onChange={onChange}>
                <option key="select" value="X">-Select a {menuLabel}-</option>
                {
                    data.map(d => <option key={d.key} id={d.key} value={d.value}>{d.text}</option>)
                }
            </select>
        </div>
    )
}

export default Dropdown;