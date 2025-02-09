async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "f42280009b615570d810bba321865ce2"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            document.getElementById("weather-result").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <img src="${iconUrl}" class="weather-icon" alt="Weather Icon">
                <p class="temp">${data.main.temp}°C</p>
                <p class="weather-desc">${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("weather-result").innerHTML = `<p>City not found. Try again.</p>`;
        }
    } catch (error) {
        document.getElementById("weather-result").innerHTML = `<p>Error fetching weather data.</p>`;
    }
}