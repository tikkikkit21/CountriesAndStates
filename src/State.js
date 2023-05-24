import React, {useEffect, useState} from 'react';

function State({code}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://xc-countries-api.fly.dev/api/countries/${code}/states/`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        .catch(err => console.error(err));
    })

    return (
        <div className="dropdown">
            <form>
                <label htmlFor="states">Choose a state: </label>
                <select name="states" id="states">
                    {
                        data.map(d => <option key={d.code} value={d.name}>{d.name}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default State;