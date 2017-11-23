'use strict';

require('dotenv').config()

// Twilio Credentials
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

console.log('Loading vroombot-lambda');

exports.handler = (event, context, callback) => {
  client.messages
    .create({
      to: process.env.MY_PHONE_NUMBER,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: "Hello from Lambda!",
    })
    .then((message) => console.log(message.sid));

  console.log('Received event:', JSON.stringify(event, null));
};
