const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// SSL files
const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'privatekey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.pem')),
};

// Test route
app.get('/', (req, res) => {
  res.send('Hello! Backend is running securely with HTTPS.');
});

// Start HTTPS server
https.createServer(options, app).listen(PORT, () => {
  console.log(`Secure backend running at https://localhost:${PORT}`);
});
