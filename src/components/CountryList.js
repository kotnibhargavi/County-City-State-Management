import React, { useState } from 'react';
import StateList from './StateList';

function CountryList({ countries, addCountry, editCountry, deleteCountry, addState, editState, deleteState, addCity, editCity, deleteCity }) {
  const [expandedCountry, setExpandedCountry] = useState(null);

  const toggleCountryExpand = (countryId) => {
    if (expandedCountry === countryId) {
      setExpandedCountry(null);
    } else {
      setExpandedCountry(countryId);
    }
  };

  return (
    <div className="country-list">
      <div className="country-header">
        <h2>Countries</h2>
        <button className="add-btn" onClick={addCountry}>Add Country</button>
      </div>
      
      {countries.length === 0 ? (
        <div className="empty-message">No countries added yet. Click "Add Country" to get started.</div>
      ) : (
        <div className="country-items">
          {countries.map(country => (
            <div key={country.id} className="country-item">
              <div className="country-main">
                <div className="title-section" onClick={() => toggleCountryExpand(country.id)}>
                  <span className="expand-icon">{expandedCountry === country.id ? '▼' : '►'}</span>
                  <h3>{country.name}</h3>
                  <span className="count-badge">{country.states.length} states</span>
                </div>
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => editCountry(country.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteCountry(country.id)}>Delete</button>
                  <button className="add-state-btn" onClick={(e) => {
                    e.stopPropagation();
                    addState(country.id);
                    setExpandedCountry(country.id);
                  }}>Add State</button>
                </div>
              </div>
              
              {expandedCountry === country.id && (
                <div className="states-container">
                  <StateList 
                    countryId={country.id}
                    states={country.states}
                    editState={editState}
                    deleteState={deleteState}
                    addCity={addCity}
                    editCity={editCity}
                    deleteCity={deleteCity}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryList;