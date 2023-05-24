import React, {useEffect, useState} from 'react';

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

    return (
        <div className="dropdown">
            <form>
                <label for="countries">Choose a country: </label>
                <select name="countries" id="countries">
                    {
                        data.map(d => <option value={d.name}>{d.name}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default Country;