import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import GetData from './pages/GetData';
import AddData from './pages/AddData';
import Navbar from './Navbar';

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

        fetch('http://localhost:5000/api/Countries', {
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
                alert(`Country was unable to be added: ${res.status}`);
                console.error(res);
            }
        }).catch(err => {
            alert("Internal error");
            console.error(err)
        });
    }

    function onClickState() {
        const code = document.getElementById("code-state").value;
        const name = document.getElementById("name-state").value;
        const countryId = document.getElementById("countries-state").value;

        fetch('http://localhost:5000/api/States', {
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
                alert(`State was unable to be added: ${res.status}`);
                console.error(res);
            }
        }).catch(err => {
            alert("Internal error");
            console.error(err)
        });
    }

    return (
        <div className="app">
            <Navbar home="Countries & States" links={[{name: "Search Data", path: "/search_data"}, {name: "Add Data", path: "/add_data"}]}/>

            <BrowserRouter className="content">
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="search_data" element={<GetData
                                                        code={code}
                                                        update={update}
                                                        onChange={onChange}
                                                    />}/>
                <Route path="add_data" element={<AddData
                                                    code={code}
                                                    update={update}
                                                    onClickCountry={onClickCountry}
                                                    onClickState={onClickState}
                                                />}/>
            </Routes>
            </BrowserRouter>
            
            {/* <Input
                label="country"
                info={[
                    {name: "code", id: "code-country"},
                    {name: "name", id: "name-country"}
                ]}
            />
            <input className="btn btn-primary" type="submit" onClick={onClickCountry}/>
            
            <Input
                label="state"
                info={[
                    {name: "code", id: "code-state"},
                    {name: "name", id: "name-state"}
                ]}
            />
            <Country id="countries-state" code={code} update={update} value="id" onChange={onChange}/>
            <input className="btn btn-primary" type="submit" onClick={onClickState}/> */}
        </div>
    );
}

export default App;