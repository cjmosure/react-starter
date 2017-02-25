var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var api_key = 'key-b3abd5da6a6fc84b96cc063894b9a137';
var domain = 'my.priorsurvey.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var morgan = require('morgan');

// User data model
var userData = {};

// Enable cors on all calls
app.use(cors());

// Logs
app.use(morgan());

// Parse request body data to json
app.use(bodyParser.json());

// Error handling
app.use(methodOverride());
app.use(function (err, req, res, next) {
  if (err) {
    res.status(600).send("Oh uh, something went wrong.");
  }
});

// Get to /
app.get('/', function (req, res) {
  res.send('');
});

// Post to /
app.post('/', function (req, res) {
  var authUUID = req.get('Authentication');
  if (authUUID == 'a2091d75-f0c7-416e-9123-0ea5b203dc0e') {
    userData = req.body;
    var response = sendEmail(userData);
    //res.send('Thanks for submitting ' + userData.fullname + '!');
    res.status(200);
    res.send('Success');
  } else {
    res.status(400);
    res.send('Not Authenticated');
  }
});


// Mailgun send email @TODO should be called by inital post and should pass in the object including all information
function sendEmail(userData) {
  var data = {
    from: 'No Reply <postmaster@my.priorsurvey.com>',
    to: userData.mailto,
    subject: 'Prior Survey: Survey Request',
    text: 'Hello, the following person would like more information about a survey. You can find their information below. \n \n' +
          'Full Name: ' + userData.fullname + '\n' +
          'Email: ' + userData.email + '\n' +
          'Phone: ' + userData.phone + '\n' +
          'Address: ' + userData.address.address + '\n' +
          'City: ' + userData.address.city + '\n' +
          'State: ' + userData.address.state + '\n' +
          'Zip: ' + userData.address.zip + '\n' +
          'Country: ' + userData.address.country + '\n' +
          'Number: ' + userData.address.number
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      return error;
    }
    return body;
  });
}

app.listen(4000, function(){
  console.log('Server started at port 4000!');
});
