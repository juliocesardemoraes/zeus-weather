import { useAtom } from "jotai";
import { atomCard } from "../../store/store";
import { useState } from "react";
import { getWeather } from "../../actions/weather";

export default function InputCard() {
  const [, setCard] = useAtom(atomCard);
  const [cityName, setCityName] = useState("");

  return (
    <form
      className="mt-2 container__half flex__col flex items__center justify__center"
      onSubmit={async (event) => {
        event.preventDefault();
        const weatherInfo = await getWeather(cityName);
        setCard(weatherInfo);
      }}
    >
      <div className="login">
        <h2>Procure a temperatura de uma cidade</h2>
        <label className="mt-2" htmlFor="name">
          Cidade
        </label>
        <input
          id="name"
          name="name"
          placeholder="Nome da cidade"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          required
        ></input>
        <button className="mt-2" type="submit">
          Procurar
        </button>
      </div>
    </form>
  );
}
