const express = require('express');

var app = express();

app.get('/', (req, res) => {
  //res.send('<h1>Hello from Express!</h1>');
  res.send({
    name: 'Hao',
    likes: [
      'music',
      'work out'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);