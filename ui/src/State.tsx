import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        fetch(`http://localhost:5000/api/Countries/${code}/states/`)
        .then(res => res.json())
        .then(json => {
            json.sort((a: StateData, b: StateData) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })

            setData(json);
        })
        .catch(err => console.error(err));
    }, [code, update])

    return <Dropdown
        id={id}
        menuLabel="state"
        data={data.map((d: CountryData) => {
            return {key: d.id, value: d.code, text: d.name}
        })}
    />;
}

export default State;