const tempButton = document.getElementById("temperature");
const conditions = document.getElementById("weather-conditions");
const output = document.getElementById("output");

tempButton.addEventListener("click", () => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch")
        .then((response) => response.json())    
        .then((data) => {
            output.innerHTML = `<p>Current temperature: ${data.current.temperature_2m}°F</p>`;
        });
}); 

function getWeather(code) {
    const describe = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Light snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Light rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        85: "Light snow showers",
        86: "Heavy snow showers"
    };
    return describe[code] || "Unknown";
}



conditions.addEventListener("click", () => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch")
        .then((response) => response.json())
        .then((data) => {
            const weatherDescription = getWeather(data.current.weather_code);
            output.innerHTML = `<p>Current conditions: ${weatherDescription}</p>`;
        });
});




