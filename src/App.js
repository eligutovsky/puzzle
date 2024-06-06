import './App.css';

import React, { useState } from 'react';

function App() {
  const code = '2562';
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue !== code) {
      alert('Неверный код');
      return;
    }
    alert('АААААА! Вы взломали пиратский сайт!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Пиратский сайт</h1>
        <div className="chest-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Код"
          />
          <button onClick={handleSubmit}>Войти</button>
        </div>
      </header>
    </div>
  );
}

export default App;