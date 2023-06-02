import {ChangeEventHandler, useEffect, useState} from 'react';
import Dropdown from './Dropdown';

type Props = {
    id: string,
    update: boolean,
    onChange?: ChangeEventHandler,
    value: string | number
}

type CountryData = {
    id: number,
    code: string,
    name: string
}

function Country({id, update, onChange, value}: Props) {
    const [data, setData] = useState([]);

    async function getCountries() {
        const res = await fetch("http://localhost:5000/api/Countries");
        const json = await res.json();
    
        json.sort((a: CountryData, b: CountryData) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
    
        setData(json);
    }

    useEffect(() => {getCountries()}, [update]);

    return <Dropdown
        id={id}
        menuLabel="country"
        data={data.map((d: CountryData) => {
            return {key: d.id, value: d[value as keyof CountryData], text: d.name};
        })}
        onChange={onChange}
    />;
}

export default Country;