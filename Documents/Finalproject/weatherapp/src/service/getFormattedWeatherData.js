import { DateTime } from "luxon";


const API_KEY = "ed55b36e362d8733f7d859247cedeaf2";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

  const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid:
      API_KEY });
  
  return fetch(url)
  .then((res) => res.json())
  .catch(error => {
    console.log(error);
    // Handle the error, e.g., display an error message to the user
  });
  };

  const formatCurrentWeather = (data) => {
    const {
      coord: {lat, lon},
      main: {temp, feels_like, temp_min, temp_max, humidity},
      name,
      dt,
      sys: {country, sunrise, sunset},
      weather,
      wind: {speed}
    } = data

    const {main: description, icon} = weather[0]

    return {
      lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, description, icon, speed
    }
  }

 const formatForecastWeather = (data) => {
  let { timezone, daily, hourly} = data;
  daily = daily.slice(1, 6).map(d => {
  return {
    title: formatToLocation(d.dt, timezone, 'ccc'),
    temp_min: d.temp.min,
    temp_max: d.temp.max,
    icon: d.weather[0].icon
  }
  });

  hourly = hourly.slice(1, 6).map(d => {
  return {
    title: formatToLocation(d.dt, timezone, 'hh:mm a'),
    temp: d.temp,
    icon: d.weather[0].icon
  }
  });

  return { timezone, daily, hourly };
 }

  const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
     ("weather", searchParams).then(formatCurrentWeather)

     const { lat, lon } = formattedCurrentWeather;
  
  const formattedForecastWeather = await getWeatherData("onecall", 
  {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather)

      return { ...formattedCurrentWeather, ...formattedForecastWeather }
    }

    const formatToLocation = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format); 

   const iconUrlFromCode = (code) => 
   `http://openweathermap.org/img/wn/${code}@2x.png`;

    export default getFormattedWeatherData;

    export { formatToLocation, iconUrlFromCode };



