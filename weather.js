let request = require('request');
const argv = require('yargs').argv;

let apiKey = '2c173e3ef608ab30dd56e81fb45abfc5';
let city = argv.c;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in
                ${weather.name}!`;
    console.log(message);
  }
});


