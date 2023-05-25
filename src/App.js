import {useState} from 'react';
import './App.css';
import Country from './Country';
import State from './State';
import Input from './Input';

function App() {
    const [code, setCode] = useState("X"); // prevents invalid URL for state fetching
    const [update, setUpdate] = useState(true);

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
            body: JSON.stringify({"code": code, "name": name})
        }).then(res => {
            if (res.ok) {
                alert (`The ${name} country was succesfully added!`);
                setUpdate(!update);
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
        const countryId = document.getElementById("countries-state").value;

        fetch('https://xc-countries-api.fly.dev/api/states/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"code": code, "name": name, "countryId": countryId})
        }).then(res => {
            if (res.ok) {
                alert (`The ${name} state was succesfully added!`);
                setUpdate(!update);
            } else {
                alert("State was unable to be added");
                console.error(res);
            }
        }).catch(err => {
            alert("State was unable to be added");
            console.error(err)
        });
    }

    return (
        <div className="app">
            <h1>Countries and States</h1>
            <Country id="countries" code={code} update={update} value="code" onChange={onChange}/>
            <State id="states" code={code} update={update}/>
            <Input
                label="country"
                info={[
                    {name: "code", id: "code-country"},
                    {name: "name", id: "name-country"}
                ]}
            />
            <input type="submit" onClick={onClickCountry}/>
            <Input
                label="state"
                info={[
                    {name: "code", id: "code-state"},
                    {name: "name", id: "name-state"}
                ]}
            />
            <Country id="countries-state" code={code} update={update} value="id" onChange={onChange}/>
            <input type="submit" onClick={onClickState}/>
        </div>
    );
}

export default App;