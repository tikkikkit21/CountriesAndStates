import React, {ChangeEventHandler, useEffect, useState} from 'react';
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

    useEffect(() => {
        fetch("http://localhost:5000/api/Countries")
        .then(res => res.json())
        .then(json => {
            json.sort((a: CountryData, b: CountryData) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })

            setData(json);
        })
        .catch(err => console.error(err));
    }, [update])

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