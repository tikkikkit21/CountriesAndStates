import './App.css';

function App() {
    return (
        <div className="app">
            <h1>Hello, World!</h1>
            <button className="country" onClick={handleClick}>Countries</button>
        </div>
    );
}

export default App;

function handleClick() {
    console.log("I have been clicked");
}