document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value.trim();
    const weatherDiv = document.getElementById("weather");
    const apiKey = "9a1735cafdf172685c984b1ed954ee2b";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    if (city === "") {
        weatherDiv.innerHTML = `<p style="color: red;">Please enter a city name!</p>`;
        weatherDiv.style.display = "block";
        return;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error("City not found");
            }
            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Temperature: ${data.main.temp}°C</p>
                <p>🌥️ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherDiv.style.display = "block";  
        })
        .catch(() => {
            weatherDiv.innerHTML = `<p style="color: red;">City not found</p>`;
            weatherDiv.style.display = "block";  
        });
});
