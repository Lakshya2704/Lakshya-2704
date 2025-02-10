// Weather App - Fetches real-time weather data based on user input using OpenWeatherMap API.

async function getWeather() {
    const city = document.getElementById("city").value.trim(); // Get the city name entered by the user
    const apiKey = "f42280009b615570d810bba321865ce2"; // OpenWeatherMap API key (Replace with your own key)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url); // Fetch weather data from API
        const data = await response.json(); // Convert response to JSON format

        if (data.cod === 200) { // If API response is successful
            const iconCode = data.weather[0].icon; // Get weather condition icon code
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`; // Build icon URL

            // Display fetched weather data in the weather-result div
            document.getElementById("weather-result").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <img src="${iconUrl}" class="weather-icon" alt="Weather Icon">
                <p class="temp">${data.main.temp}°C</p>
                <p class="weather-desc">${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            // Show error message if city is not found
            document.getElementById("weather-result").innerHTML = `<p>City not found. Try again.</p>`;
        }
    } catch (error) {
        // Show error message if API request fails
        document.getElementById("weather-result").innerHTML = `<p>Error fetching weather data.</p>`;
    }
}
