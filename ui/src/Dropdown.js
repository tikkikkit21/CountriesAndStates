import React from 'react';
import Form from 'react-bootstrap/Form';

function Dropdown({id, menuLabel, data, onChange}) {
    return (
        <div className="dropdown p-1 w-25">
            <Form.Select className="p-1 " name={id} id={id} onChange={onChange}>
                <option key="select" value="X">-Select a {menuLabel}-</option>
                {
                    data.map(d => <option key={d.key} id={d.key} value={d.value}>{d.text}</option>)
                }
            </Form.Select>
        </div>
    )
}

export default Dropdown;