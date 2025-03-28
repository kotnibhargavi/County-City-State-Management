import React, { useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';

function App() {
  // Main state to store countries, states, and cities data
  const [countries, setCountries] = useState([]);

  // Add a new country
  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName && countryName.trim() !== "") {
      const newCountry = {
        id: Date.now(),
        name: countryName.trim(),
        states: []
      };
      setCountries([...countries, newCountry]);
    }
  };

  // Edit country name
  const editCountry = (countryId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    const newName = prompt("Edit country name:", country.name);
    if (newName && newName.trim() !== "" && newName !== country.name) {
      if (window.confirm(`Are you sure you want to update ${country.name} to ${newName}?`)) {
        const updatedCountries = countries.map(c => 
          c.id === countryId ? { ...c, name: newName.trim() } : c
        );
        setCountries(updatedCountries);
      }
    }
  };

  // Delete a country and all its states and cities
  const deleteCountry = (countryId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    if (window.confirm(`Are you sure you want to delete ${country.name}? All states and cities within it will be deleted too.`)) {
      const updatedCountries = countries.filter(c => c.id !== countryId);
      setCountries(updatedCountries);
    }
  };

  // Add a state to a country
  const addState = (countryId) => {
    const stateName = prompt("Enter state name:");
    if (stateName && stateName.trim() !== "") {
      const updatedCountries = countries.map(country => {
        if (country.id === countryId) {
          const newState = {
            id: Date.now(),
            name: stateName.trim(),
            cities: []
          };
          return {
            ...country,
            states: [...country.states, newState]
          };
        }
        return country;
      });
      setCountries(updatedCountries);
    }
  };

  // Edit state name
  const editState = (countryId, stateId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    const state = country.states.find(s => s.id === stateId);
    if (!state) return;
    
    const newName = prompt("Edit state name:", state.name);
    if (newName && newName.trim() !== "" && newName !== state.name) {
      if (window.confirm(`Are you sure you want to update ${state.name} to ${newName}?`)) {
        const updatedCountries = countries.map(c => {
          if (c.id === countryId) {
            const updatedStates = c.states.map(s => 
              s.id === stateId ? { ...s, name: newName.trim() } : s
            );
            return { ...c, states: updatedStates };
          }
          return c;
        });
        setCountries(updatedCountries);
      }
    }
  };

  // Delete a state and all its cities
  const deleteState = (countryId, stateId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    const state = country.states.find(s => s.id === stateId);
    if (!state) return;
    
    if (window.confirm(`Are you sure you want to delete ${state.name}? All cities within it will be deleted too.`)) {
      const updatedCountries = countries.map(c => {
        if (c.id === countryId) {
          const updatedStates = c.states.filter(s => s.id !== stateId);
          return { ...c, states: updatedStates };
        }
        return c;
      });
      setCountries(updatedCountries);
    }
  };

  // Add a city to a state
  const addCity = (countryId, stateId) => {
    const cityName = prompt("Enter city name:");
    if (cityName && cityName.trim() !== "") {
      const updatedCountries = countries.map(country => {
        if (country.id === countryId) {
          const updatedStates = country.states.map(state => {
            if (state.id === stateId) {
              const newCity = {
                id: Date.now(),
                name: cityName.trim()
              };
              return {
                ...state,
                cities: [...state.cities, newCity]
              };
            }
            return state;
          });
          return { ...country, states: updatedStates };
        }
        return country;
      });
      setCountries(updatedCountries);
    }
  };

  // Edit city name
  const editCity = (countryId, stateId, cityId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    const state = country.states.find(s => s.id === stateId);
    if (!state) return;
    
    const city = state.cities.find(c => c.id === cityId);
    if (!city) return;
    
    const newName = prompt("Edit city name:", city.name);
    if (newName && newName.trim() !== "" && newName !== city.name) {
      if (window.confirm(`Are you sure you want to update ${city.name} to ${newName}?`)) {
        const updatedCountries = countries.map(c => {
          if (c.id === countryId) {
            const updatedStates = c.states.map(s => {
              if (s.id === stateId) {
                const updatedCities = s.cities.map(city => 
                  city.id === cityId ? { ...city, name: newName.trim() } : city
                );
                return { ...s, cities: updatedCities };
              }
              return s;
            });
            return { ...c, states: updatedStates };
          }
          return c;
        });
        setCountries(updatedCountries);
      }
    }
  };

  // Delete a city
  const deleteCity = (countryId, stateId, cityId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    const state = country.states.find(s => s.id === stateId);
    if (!state) return;
    
    const city = state.cities.find(c => c.id === cityId);
    if (!city) return;
    
    if (window.confirm(`Are you sure you want to delete ${city.name}?`)) {
      const updatedCountries = countries.map(c => {
        if (c.id === countryId) {
          const updatedStates = c.states.map(s => {
            if (s.id === stateId) {
              const updatedCities = s.cities.filter(city => city.id !== cityId);
              return { ...s, cities: updatedCities };
            }
            return s;
          });
          return { ...c, states: updatedStates };
        }
        return c;
      });
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Country, State, and City Management</h1>
      </header>
      <div className="app-content">
        <CountryList 
          countries={countries} 
          addCountry={addCountry} 
          editCountry={editCountry} 
          deleteCountry={deleteCountry}
          addState={addState}
          editState={editState}
          deleteState={deleteState}
          addCity={addCity}
          editCity={editCity}
          deleteCity={deleteCity}
        />
      </div>
    </div>
  );
}

export default App;