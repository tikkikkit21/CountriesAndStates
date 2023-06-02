import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Input({name, id}) {
    return (
        <FloatingLabel label={"Enter a " + name}>
            <Form.Control id={id} required type="text" name={name} placeholder={"Enter a " + name}/>
        </FloatingLabel>
    );
}

export default Input;