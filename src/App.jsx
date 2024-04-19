import "./App.css";
import InputCard from "./components/InputCard/InputCard";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <>
      <h1 className="font-white text-center">Zeus Weather</h1>
      <InputCard></InputCard>
      <WeatherCard></WeatherCard>
    </>
  );
}

export default App;
