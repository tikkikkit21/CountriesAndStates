import React, {useEffect, useState} from 'react';

function Country({handleInput}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://xc-countries-api.fly.dev/api/countries/")
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        .catch(err => console.error(err));
    })

    return (
        <div className="dropdown">
            <form>
                <label htmlFor="countries">Choose a country: </label>
                <select name="countries" id="countries" onChange={handleInput}>
                    {
                        data.map(d => <option key={d.code} value={d.code}>{d.name}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default Country;