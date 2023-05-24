import {useState} from 'react';
import './App.css';
import Country from './Country';
import State from './State';
import Input from './Input';

function App() {
    const [code, setCode] = useState("X"); // prevents invalid URL for state fetching

    function onChange() {
        const d = document.getElementById("countries").value;
        setCode(d);
    }

    function onClickCountry() {
        const code = document.getElementById("code-country").value;
        const name = document.getElementById("name-country").value;

        fetch('https://xc-countries-api.fly.dev/api/countries/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "code": code, "name": name })
        }).then(res => {
            if (res.ok) {
                alert (`The ${name} country was succesfully added!`);
            } else {
                alert("Country was unable to be added");
                console.error(res);
            }
        }).catch(err => {
            alert("Country was unable to be added");
            console.error(err)
        });
    }

    function onClickState() {
        const code = document.getElementById("code-state").value;
        const name = document.getElementById("name-state").value;
        const countryId = document.getElementById("cid-state").value;

        fetch('https://xc-countries-api.fly.dev/api/states/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "code": code, "name": name, "countryId": countryId})
        }).then(res => {
            if (res.ok) {
                alert (`The ${name} country was succesfully added!`);
            } else {
                alert("Country was unable to be added");
                console.error(res);
            }
        }).catch(err => {
            alert("Country was unable to be added");
            console.error(err)
        });
    }

    return (
        <div className="app">
            <h1>Countries and States</h1>
            <Country code={code} onChange={onChange}/>
            <State code={code}/>
            <Input
                label="country"
                info={[
                    {name: "code", id: "code-country"},
                    {name: "name", id: "name-country"}
                ]}
                onClick={onClickCountry}
            />
            <Input
                label="state"
                info={[
                    {name: "code", id: "code-state"},
                    {name: "name", id: "name-state"},
                    {name: "countryId", id: "cid-state"}
                ]}
                onClick={onClickState}
            />
        </div>
    );
}

export default App;