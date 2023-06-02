import {useEffect, useState} from 'react';
import Dropdown from './Dropdown'

type Props = {
    id: string,
    code: string,
    update: boolean
}

type CountryData = {
    id: number,
    code: string,
    name: string
}

type StateData = {
    id: number,
    code: string,
    name: string,
    countryId: number
}

function State({id, code, update}: Props) {
    const [data, setData] = useState([]);

    async function getStates() {
        const res = await fetch(`http://localhost:5000/api/Countries/${code}/states/`);
        const json = await res.json();
        
        json.sort((a: StateData, b: StateData) => {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        });

        setData(json);
    }

    useEffect(() => {getStates()}, [code, update]);

    return <Dropdown
        id={id}
        menuLabel="state"
        data={data.map((d: CountryData) => {
            return {key: d.id, value: d.code, text: d.name}
        })}
    />;
}

export default State;