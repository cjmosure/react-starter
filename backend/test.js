var axios = require('axios');

var data = {
	"mailto": "cj@webmachine.io",
	"fullname": "Gary Bunofsky",
	"email": "gary@garybunofsky.com",
	"phone": "3304022196",
	"address": {
		"address": "8001 S IH 35 Apt#3026",
		"city": "Austin",
		"zip": "78744",
		"state": "Texas",
		"country": "United States",
		"number": ""
	}
};

var config = {
  headers: {
    "Content-Type": "application/json",
    "Authentication": "a2091d75-f0c7-416e-9123-0ea5b203dc0e"},
  responseType: "text"
};

axios.post('http://localhost:4000/',data, config)
  .then(function (response) {
    console.log('Response:',response.data);
  })
  .catch(function (error) {
    console.log('Error:',error);
  });
