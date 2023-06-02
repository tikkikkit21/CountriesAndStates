import {useEffect, useState} from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';

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
    const [data, setData] = useState<StateData[]>([]);

    async function getStates() {
        const {data} = await axios.get<StateData[]>(`http://localhost:5000/api/Countries/${code}/states/`);
        data.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
        setData(data);
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