import React from 'react';

function Dropdown({id, menuLabel, data, handleInput, optionName, optionValue, optionKey}) {
    return (
        <div className="dropdown">
            <label htmlFor={menuLabel}>Choose a {menuLabel}: </label>
            <select name={id} id={id} onChange={handleInput}>
                <option key="select" value="X">-Select a {menuLabel}-</option>
                {
                    data.map(d => <option key={d[optionKey]} value={d[optionValue]}>{d[optionName]}</option>)
                }
            </select>
        </div>
    )
}

export default Dropdown;