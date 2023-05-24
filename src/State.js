import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown'

function State({code}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://xc-countries-api.fly.dev/api/countries/${code}/states/`)
        .then(res => res.json())
        .then(json => {
            json.sort((a,b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })

            setData(json);
        })
        .catch(err => console.error(err));
    }, [code])

    return <Dropdown
        id ="states"
        menuLabel="state"
        data={data}
        optionName="name"
        optionValue="code"
        optionKey="id"
    />;
}

export default State;