import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faEye, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import mockData from './MOCK_DATA.json';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [checkAll, setCheckAll] = useState(false);
  const [checkedCards, setCheckedCards] = useState([]);

  const handleReadFullClick = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const handleCheckAllChange = (e) => {
    setCheckAll(e.target.checked);
    setCheckedCards(e.target.checked ? mockData.map((news) => news.id) : []);
  };

  const handleCardCheckboxChange = (id) => {
    if (checkedCards.includes(id)) {
      setCheckedCards(checkedCards.filter((cardId) => cardId !== id));
    } else {
      setCheckedCards([...checkedCards, id]);
    }
  };

  const handleDeleteClick = () => {
    const filteredData = mockData.filter((news) => !checkedCards.includes(news.id));
    mockData.length = 0;
    Array.prototype.push.apply(mockData, filteredData);
    setCheckedCards([]);
    setCheckAll(false);
  };
  
  return (
    <div className="App">
      <div className="header">
        <h2>News Articles</h2>
      </div>
      <div className="actions">
        <div className="actions-left">
          <div className="checkbox-container">
            <input type="checkbox" checked={checkAll} onChange={handleCheckAllChange} />
          </div>
          <button className="publish">Publish</button>
          <button className="delete" onClick={handleDeleteClick}>
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
                  checked={checkedCards.includes(news.id)}
                  onChange={() => handleCardCheckboxChange(news.id)}
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
                <p>{truncateText(news.content, 100)}</p>
                <button className="read-full-button" onClick={() => handleReadFullClick(news)}>
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