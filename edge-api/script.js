const express = require('express');
const fetch = require('node-fetch');
const path = require('path'); // Node.js path module

const app = express();
const port = process.env.PORT || 4000;

// Serve your HTML file at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Assuming your HTML file is named 'index.html'
});

// Other middleware and routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

const myHeaders = new fetch.Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('fiware-service', 'smart');
myHeaders.append('fiware-servicepath', '/');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

app.get('/t', async (req, res) => {
  try {
    const response = await fetch("http://46.17.108.113:8666/STH/v1/contextEntities/type/NovaVita/id/urn:ngsi-ld:NovaVita:1000/attributes/temperature?lastN=50", requestOptions);
    //46.17.108.113
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/i', async (req, res) => {
  try {
    const response = await fetch("http://46.17.108.113:8666/STH/v1/contextEntities/type/NovaVita/id/urn:ngsi-ld:NovaVita:1000/attributes/infravermelho?lastN=50", requestOptions);
    //46.17.108.113
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/b', async (req, res) => {
  try {
    const response = await fetch("http://46.17.108.113:8666/STH/v1/contextEntities/type/NovaVita/id/urn:ngsi-ld:NovaVita:1000/attributes/bpm?lastN=50", requestOptions);
    //46.17.108.113
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/o', async (req, res) => {
  try {
    const response = await fetch("http://46.17.108.113:8666/STH/v1/contextEntities/type/NovaVita/id/urn:ngsi-ld:NovaVita:1000/attributes/ox?lastN=50", requestOptions);
    //46.17.108.113
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
