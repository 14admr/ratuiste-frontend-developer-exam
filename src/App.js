import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faEye, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
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
        {mockData.map((news) => (
          <div className="card" key={news.id}>
            <div className="left-section">
              <div className="checkbox-container">
                <span className="drag-icon">
                  <FontAwesomeIcon icon={faGripVertical} />
                </span>
                <input
                  type="checkbox"
                />
              </div>
            </div>
            <div className="middle-section">
              <div className="top-section">
                <h3>{news.title}</h3>
              </div>
              <div className="center-section">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                  {news.author}
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                  {news.date}
                </span>
              </div>
              <div className="bottom-section">
                <p>{news.content}</p>
                <button className="read-full-button">
                  <FontAwesomeIcon icon={faEye} />
                  Read Full
                </button>
              </div>
            </div>
            <div className="right-section">
              <div className="center-section">
                <span className="tag">#Sports</span>
                <span className="tag">#Worldwide</span>
                <span className="tag">#Local</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;