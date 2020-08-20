import React from 'react';
import './App.css';
import CityList from './CityList';
import TemperatureAverage from './TemperatureAverage';
import AddCityButton from './AddCityButton';
import WeatherContext from './Context';

function App() {
  const [cities, setCities] = React.useState([]);
  
  const addCity = (name, temperature) => {
    const newCity = { name, temperature };
    setCities(prevCities => [...prevCities, newCity]);
  };
  return (
    <WeatherContext.Provider value={{
      cities,
      addCity,
    }}>
      <div className="city-overview">
        <h2>Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
