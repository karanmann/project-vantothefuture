// GET WEATHER REPORT
const enteredCityLocation = "Stockholm";

//API's
const API_ONE_DAY = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCityLocation}&appid=a77136eb90fd8d858de1f60c1ae1ee51`;

let cityLocation = document.getElementById("currentCityName");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");

// Weather Variables
const fetchWeather = () => {

  fetch(API_ONE_DAY)
  .then((response) => {return response.json();})
  .then(data => {
    //CONSOLE LOG TO SEE API DATA
    console.log(data);
    const { id, main } = data.weather[0];
    cityLocation.textContent = data.name;
    tempValue.textContent = ((data.main.temp - 273).toFixed(1));
    climate.textContent = main;

    // Changing Icons for weather using if-else
    if (id < 250) {
      tempIcon.src = '../assets/icons/thunder.png';
    }
    else if (id < 350) {
      tempIcon.src = '../assets/icons/lightrain.png';
    }
    else if (id < 550) {
      tempIcon.src = '../assets/icons/heavyrain.png';
    }
    else if (id < 650) {
      tempIcon.src = '../assets/icons/snow.png';
    }
    else if (id < 700) {
      tempIcon.src = '../assets/icons/thunder.png';
    }
    else if (id == 800) {
      tempIcon.src = '../assets/icons/clear.png';
    }
    else if (id > 800) {
      tempIcon.src = '../assets/icons/cloudy.png';
    }
    else {
      tempIcon.src = '../assets/icons/bad.png';
    };
  })
  .catch((error) => {
    console.log('There has been an error');
  })
};

fetchWeather();


