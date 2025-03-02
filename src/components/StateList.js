import React, { useState } from 'react';
import CityList from './CityList';

function StateList({ countryId, states, editState, deleteState, addCity, editCity, deleteCity }) {
  const [expandedState, setExpandedState] = useState(null);

  const toggleStateExpand = (stateId) => {
    if (expandedState === stateId) {
      setExpandedState(null);
    } else {
      setExpandedState(stateId);
    }
  };

  return (
    <div className="state-list">
      {states.length === 0 ? (
        <div className="empty-message">No states added yet.</div>
      ) : (
        <div className="state-items">
          {states.map(state => (
            <div key={state.id} className="state-item">
              <div className="state-main">
                <div className="title-section" onClick={() => toggleStateExpand(state.id)}>
                  <span className="expand-icon">{expandedState === state.id ? '▼' : '►'}</span>
                  <h4>{state.name}</h4>
                  <span className="count-badge">{state.cities.length} cities</span>
                </div>
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => editState(countryId, state.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteState(countryId, state.id)}>Delete</button>
                  <button className="add-city-btn" onClick={(e) => {
                    e.stopPropagation();
                    addCity(countryId, state.id);
                    setExpandedState(state.id);
                  }}>Add City</button>
                </div>
              </div>
              
              {expandedState === state.id && (
                <div className="cities-container">
                  <CityList 
                    countryId={countryId}
                    stateId={state.id}
                    cities={state.cities}
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

export default StateList;