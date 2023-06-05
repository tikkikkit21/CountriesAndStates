import { ChangeEventHandler } from 'react';
import Form from 'react-bootstrap/Form';

type Data = {
    key: number,
    value: string | number,
    text: string
}

type Props = {
    id: string,
    menuLabel: string,
    data: Array<Data>,
    onChange?: ChangeEventHandler
}

function Dropdown({ id, menuLabel, data, onChange }: Props) {
    return (
        <Form.Select name={id} id={id} onChange={onChange}>
            <option key="select" value="X">-Select a {menuLabel}-</option>
            {
                data.map(d => <option key={d.key} id={d.key.toString()} value={d.value}>{d.text}</option>)
            }
        </Form.Select>
    )
}

export default Dropdown;