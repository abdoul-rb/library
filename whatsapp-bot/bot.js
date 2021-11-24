const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

const accountSid = 'SID';
const authToken = 'TOKEN';

const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('req', (req, res) => {
  const twiml = new MessagingResponse();
  var msg = twiml.message(req.body.Body);
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
  console.log(req.body)
});

app.get('/', (req, res) => {
  res.send('Welcome');
})

app.listen(3002)