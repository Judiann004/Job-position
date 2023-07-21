
import './App.css';
import TopButton from './components/TopButton';
import Input from './components/Input';
import Date from './components/Date';
import Temperature from './components/Temperature';
import getFormattedWeatherData from './service/getFormattedWeatherData';
import { useEffect, useState } from 'react';
import ForecastHour from './components/ForecastHour';
import ForecastDay from './components/ForecastDay';

function App() {

  const [query, setQuery] = useState({q: "berlin"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData( { ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      );
      
    }; 
  
    fetchWeather();
  }, [query, units]);

   function formatBackground () {
if (!weather) return "from-cyan-700 to-blue-700";
  const threshold = units === "metric" ? 20 : 60;
  if (weather.temp <= threshold) {
    return "from-cyan-700 to-blue-700";
  } else {
    return "from-yellow-700 to-orange-700";
  }

  }
  

  return (
    <div className='weatherApp'>
    <div className={`container mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground ()}`}>
    <TopButton setQuery={setQuery} />
    <Input setQuery={setQuery} units={units} setUnits={setUnits} />

    {weather && (
      <div>
   <Date weather={weather} />
   <Temperature weather={weather} />
   <ForecastHour title="hourly forecast" items={weather.hourly} />
   <ForecastDay title="daily forecast" items={weather.daily} />
   </div>
    )}
    
    </div>
    <footer className='project'>
            The project was coded by <a href="mailto:judiannpraise004@gmail" target="_blank" rel="noreferrer">Judiann Praise</a> and is {""} <a href="https://github.com/Judiann004/my-search" target="_blank" rel="noreferrer">open- sourced on Github</a> and hosted on {""} <a href='https://judiannpraisefinalproject.netlify.app/' target="_blank" rel="noreferrer">Netlify</a>
          </footer>
          
    </div>

  );
}

export default App;
