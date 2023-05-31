import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown'

function State({id, code, update}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7242/api/Countries/${code}/states/`)
        .then(res => res.json())
        .then(json => {
            json.sort((a,b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })

            setData(json);
        })
        .catch(err => console.error(err));
    }, [code, update])

    return <Dropdown
        id={id}
        menuLabel="state"
        data={data.map(d => {
            return {key: d.id, value: d.code, text: d.name}
        })}
    />;
}

export default State;