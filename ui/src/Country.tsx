import React, {ChangeEventHandler, useEffect, useState} from 'react';
import Dropdown from './Dropdown';

type Props = {
    id: string,
    update: boolean,
    onChange?: ChangeEventHandler,
    value: string
}

function Country({id, update, onChange, value}: Props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/Countries")
        .then(res => res.json())
        .then(json => {
            json.sort((a,b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })

            setData(json);
        })
        .catch(err => console.error(err));
    }, [update])

    return <Dropdown
        id={id}
        menuLabel="country"
        data={data.map((d) => {
            // @ts-ignore
            return {key: d.id, value: d[value], text: d.name};
        })}
        onChange={onChange}
    />;
}

export default Country;