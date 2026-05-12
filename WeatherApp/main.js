const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");
const locationName = document.querySelector(".location-info h2");
const stateName = document.querySelector(".location-info p");
const timeText = document.querySelector(".time");
const temperature = document.querySelector(".temp-info h1");
const weatherType = document.querySelector(".temp-info p");
const humidity = document.querySelectorAll(".info-card h3")[0];
const wind = document.querySelectorAll(".info-card h3")[1];
const feelsLike = document.querySelectorAll(".info-card h3")[2];

locationName.innerText = "Please search your location";
stateName.innerText = "";
temperature.innerText = "--.C";
weatherType.innerText = "--";
humidity.innerText = "--";
wind.innerText = "--";
feelsLike.innerText = "--";

button.addEventListener("click", () => {
    const city = input.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = "a7eec578de6e92cb08285cfffc35d2cc ";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) {
            alert("City not found");
            return;
        }
        console.log(data)
        locationName.innerText = data.name;
        stateName.innerText = data.sys.country;
        temperature.innerText = `${Math.round(data.main.temp)}.C`;
        weatherType.innerText = data.weather[0].main;
        humidity.innerText = `${data.main.humidity}%`;
        wind.innerText = `${data.wind.speed} km/h`;
        feelsLike.innerText = `${Math.round(data.main.feels_like)}.C`;
    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
}