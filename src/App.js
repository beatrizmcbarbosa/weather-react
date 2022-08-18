import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <h2>Weather App</h2>
      <Weather />
      <footer>
        This project was created by <a href='https://dapper-stardust-7d2615.netlify.app/index.html' target="_blank" rel="noreferrer">Beatriz Barbosa</a> and is available on
        <a href='https://github.com/beatrizmcbarbosa/weather-react' target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
