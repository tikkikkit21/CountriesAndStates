import './App.css';

function App() {
    return (
        <div className="app">
            <h1>Countries and States</h1>
            <button className="dropdown" onClick={handleClickCountry}>Countries</button>
            <button className="dropdown" onClick={handleClickState}>States</button>
        </div>
    );
}

export default App;

function handleClickCountry() {
    console.log("Country button clicked");
}

function handleClickState() {
    console.log("State button clicked")
}