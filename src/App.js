import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Grid } from '@mui/material';
import validator from 'validator'


function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidURL) {
      try {
        const response = await axios.post('http://localhost:5000/shortUrl', {
          fullUrl: url
        });

        setShortUrl(response.data.shortUrl);
      } catch (error) {
        console.error('Error creating short URL', error);
      }
    }

  };
  const isValidURL = (url) => {
    return validator.isURL(url)
  };

  const handleChange = (event) => {
    const inputUrl = event.target.value;
    setUrl(inputUrl);
    setIsValidUrl(isValidURL(inputUrl));
  }

  const handleClear = () => {
    setUrl('')
  }
  return (
    <Grid container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Grid item xs={8}>
        <h1>URL Shortener</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter a valid URL here"
            value={url}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!isValidUrl && url !== ''}
            helperText={!isValidUrl && url !== '' ? 'Invalid URL format' : ''}
          />

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" type="submit" disabled={!isValidUrl}>
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type='reset' onClick={handleClear}>
                Clear
              </Button>
            </Grid>
          </Grid>

        </form>


      </Grid>
      {shortUrl && (
        <div>
          <h3>Short URL:</h3>
          <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}
    </Grid>
  );
}

export default App;
