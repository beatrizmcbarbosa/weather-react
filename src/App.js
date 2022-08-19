import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Weather city="New York" />
        <footer>
          This project was created by {" "} <a href='https://dapper-stardust-7d2615.netlify.app/index.html' target="_blank" rel="noreferrer">Beatriz Barbosa</a> and is available on {" "}
          <a href='https://github.com/beatrizmcbarbosa/weather-react' target="_blank" rel="noreferrer">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
