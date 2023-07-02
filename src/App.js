import React, { useState } from 'react';
import './App.css';
import mockData from './MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>News Articles</h2>
      </div>
      <div className="actions">
        <div className="actions-left">
          <div className="checkbox-container">
            <input type="checkbox" />
          </div>
          <button className="publish">Publish</button>
          <button className="delete">
            Delete
          </button>
        </div>
        <div className="actions-right">
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="card-container">
      </div>
    </div>
  );
}

export default App;