import {useState} from 'react';
import './App.css';
import Country from './Country';
import State from './State';

function App() {
    const [code, setCode] = useState("X"); // prevents invalid URL for state fetching

    function onChange() {
        const d = document.getElementById("countries").value;
        setCode(d);
    }

    return (
        <div className="app">
            <h1>Countries and States</h1>
            <Country code={code} onChange={onChange}/>
            <State code={code}/>
        </div>
    );
}

export default App;