import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather />
        <footer>
          Coded by Sarah Bailey and is {""}
          <a
            href="https://github.com/Sarah-MB97/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
