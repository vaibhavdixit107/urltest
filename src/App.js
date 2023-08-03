import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/shortUrl', {
        fullUrl: url
      });

      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error creating short URL', error);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter URL here"
          required
        />
        <button type="submit">Shorten URL</button>
      </form>

      {shortUrl && (
        <div>
          <h3>Short URL:</h3>
          <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default App;
