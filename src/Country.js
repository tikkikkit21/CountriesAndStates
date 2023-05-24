import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown';

function Country({handleInput}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://xc-countries-api.fly.dev/api/countries/")
        .then(res => res.json())
        .then(json => {
            json.sort((a,b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })

            setData(json);
        })
        .catch(err => console.error(err));
    }, [])

    return <Dropdown
        id ="countries"
        menuLabel="country"
        data={data}
        handleInput={handleInput}
        optionName="name"
        optionValue="code"
        optionKey="id"
    />;
}

export default Country;