import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import GetData from './pages/GetData';
import AddData from './pages/AddData';
import Navbar from './Navbar';

function App() {
    const [code, setCode] = useState("X"); // prevents invalid URL for state fetching
    const [update, setUpdate] = useState(true);

    function onChange() {
        const d = (document.getElementById("countries") as HTMLInputElement).value;
        setCode(d);
    }

    function onClickCountry() {
        const code = (document.getElementById("code-country") as HTMLInputElement).value;
        const name = (document.getElementById("name-country") as HTMLInputElement).value;

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
        const code = (document.getElementById("code-state") as HTMLInputElement).value;
        const name = (document.getElementById("name-state") as HTMLInputElement).value;
        const countryId = (document.getElementById("countries-state") as HTMLInputElement).value;

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

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="search_data" element={<GetData
                                                        code={code}
                                                        update={update}
                                                        onChange={onChange}
                                                    />}/>
                <Route path="add_data" element={<AddData
                                                    update={update}
                                                    onClickCountry={onClickCountry}
                                                    onClickState={onClickState}
                                                />}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;