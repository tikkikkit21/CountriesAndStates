import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown';

function Country({id, update, onChange, value}) {
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
    }, [update])

    return <Dropdown
        id={id}
        menuLabel="country"
        data={data.map(d => {
            return {key: d.id, value: d[value], text: d.name};
        })}
        onChange={onChange}
    />;
}

export default Country;