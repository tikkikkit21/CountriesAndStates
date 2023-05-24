import React, {useEffect, useState} from 'react';
import DropButton from './DropButton';
import DropItem from './DropItem';

function Country() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://xc-countries-api.fly.dev/api/countries/")
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        .catch(err => console.error(err));
    })

    function handleClick() {

    }

    return (
        <div className="country">
            <DropButton name="Country" onClick={handleClick}/>
            {
                data.map(d => <DropItem name={d.name}/>)
            }
        </div>
    )
}

export default Country;