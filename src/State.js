import React, {useEffect, useState} from 'react';

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

    return (
        <div className="dropdown">
            <form>
                <label htmlFor="states">Choose a state: </label>
                <select name="states" id="states">
                    <option key="select" value="X">-Select a state-</option>
                    {
                        data.map(d => <option key={d.code} value={d.name}>{d.name}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default State;