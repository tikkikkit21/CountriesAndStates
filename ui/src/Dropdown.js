import React from 'react';
import Form from 'react-bootstrap/Form';

function Dropdown({id, menuLabel, data, onChange}) {
    return (
        <Form.Select name={id} id={id} onChange={onChange}>
            <option key="select" value="X">-Select a {menuLabel}-</option>
            {
                data.map(d => <option key={d.key} id={d.key} value={d.value}>{d.text}</option>)
            }
        </Form.Select>
    )
}

export default Dropdown;