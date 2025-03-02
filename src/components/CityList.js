import React from 'react';

function CityList({ countryId, stateId, cities, editCity, deleteCity }) {
  return (
    <div className="city-list">
      {cities.length === 0 ? (
        <div className="empty-message">No cities added yet.</div>
      ) : (
        <div className="city-items">
          {cities.map(city => (
            <div key={city.id} className="city-item">
              <div className="city-name">{city.name}</div>
              <div className="action-buttons">
                <button className="edit-btn" onClick={() => editCity(countryId, stateId, city.id)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteCity(countryId, stateId, city.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CityList;