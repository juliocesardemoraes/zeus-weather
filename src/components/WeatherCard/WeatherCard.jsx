import { useAtom } from "jotai";
import { atomCard } from "../../store/store";

export default function WeatherCard() {
  const [card] = useAtom(atomCard);

  return (
    <>
      {card && (
        <div className="card flex flex__col ">
          <h3 className="text-right">{card.location.name}</h3>
          <div className="flex justify__between mt-1">
            <img src={card?.current?.condition?.icon}></img>
            <div>
              <h1>{card?.current?.temp_c}º</h1>
              <span>{card?.current?.condition?.text}</span>
            </div>
          </div>
          <div className="flex justify__around mt-2">
            <div className="flex flex__col items__center gap-1">
              <img className="img__fluid" src={"/Wind.png"}></img>
              <span className="block">{card?.current?.wind_kph} km/h</span>
            </div>
            <div className="flex flex__col items__center gap-1">
              <img className="img__fluid" src={"/Sun.png"}></img>
              <span className="block">{card?.current?.uv}</span>
            </div>
            <div className="flex flex__col items__center gap-1">
              <img className="img__fluid" src={"/cloud.png"}></img>
              <span className="block">{card?.current?.cloud}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
{
    "location": {
        "name": "Rio De Janeiro",
        "region": "Rio de Janeiro",
        "country": "Brazil",
        "lat": -22.9,
        "lon": -43.23,
        "tz_id": "America/Sao_Paulo",
        "localtime_epoch": 1713559743,
        "localtime": "2024-04-19 17:49"
    },
    "current": {
        "last_updated_epoch": 1713559500,
        "last_updated": "2024-04-19 17:45",
        "temp_c": 23.0,
        "temp_f": 73.4,
        "is_day": 0,
        "condition": {
            "text": "Parcialmente nublado",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "code": 1003
        },
        "wind_mph": 6.9,
        "wind_kph": 11.2,
        "wind_degree": 170,
        "wind_dir": "S",
        "pressure_mb": 1018.0,
        "pressure_in": 30.06,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 69,
        "cloud": 75,
        "feelslike_c": 25.0,
        "feelslike_f": 77.0,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 7.0,
        "gust_mph": 11.4,
        "gust_kph": 18.4
    }
} 


 */
