// const cardElement = document.getElementById("card");
const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const codeElement = document.getElementById("code");



// получите информацию про широту, долготу и город и положите в переменные
// и сделайте их console.log
async function getWeather(){
const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
const weather = await response.json();
// console.log(weather);
const{latitude, longitude, city}= weather
console.log(latitude,longitude,city);

// сделать фетч запрос используя широту и долготу
// получите данные о температуре, скорости ветра и расшифруйте weather code
const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
const weatherElement = await res.json();
console.log(weatherElement);
const{current_weather} = weatherElement
console.log(current_weather);
const{temperature,windspeed, weathercode} = current_weather
console.log(temperature);
console.log(windspeed);
console.log(getWeatherCode(weathercode));
cityElement.textContent = city;
temperatureElement.textContent = `${temperature} *t`;
windElement.textContent = `${windspeed} m/s` ;
codeElement.textContent = getWeatherCode(weathercode) ;



}
function getWeatherCode(code){
    switch(code) {
        case 0: 
            return "Clear sky";
          case 1: 
            return "Mainly clear" ;
          case 2:
            return"Partly cloudy" ;
          case 3:
            return "Overcast";
          case 45:
            return "Fog";
          case 48:
            return "Depositing rime fog";
          case 51:
            return "Light drizzle";
          case 53:
            return "Moderate drizzle ";
          case 55:
            return "Dense intensity drizzle";
          case 56:
            return "Light freezing drizzle";
          case 57:
            return "Dense intensity drizzle";
          case 61:
            return "Slight rain";
          case 63:
            return "Moderate rain";
          case 65:
            return "Heavy intensity rain";
          case 66:
            return "Light freezing rain";
          case 67:
            return "Freezing rain heavy intensity";
          case 71:
            return "Slight snow fall";
          case 73:
            return "Moderate snow fall";
          case 75:
            return "Heavy intensity snow fall";
          case 77:
            return "Snow grains";
          case 80:
            return "Slight rain showers Slight";
          case 81:
            return "Moderate rain showers";
          case 82:
            return "Violent rain showers";
          case 85:
            return "Slight snow showers";
          case 86:
            return "Heavy snow showers";
          case 95:
            return "Thunderstorm: slight and moderate";
          case 96:
            return "Thunderstorm with slight hail";
          case 99:
            return "Thunderstorm with heavy hail";
          default:
             "weatherDescription";
            // console.log(weatherDescription);
}

}
getWeather();

