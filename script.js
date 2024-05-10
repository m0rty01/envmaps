mapboxgl.accessToken = 'pk.eyJ1IjoibTBydHkwMSIsImEiOiJjbHcwZXhodWYwMDZ0Mmtwdng2eWx0bjVmIn0.VxUX7yWfl-5N7p1x5wh4Gw';

document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'b1ac7aa6dd9846248b2234957240605';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Waterloo`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temp_c;
            const humidity = data.current.humidity;
            const precipitation = data.current.precip_mm;

            // displayWeatherInfo(temperature, humidity, precipitation);

            // Get user's location coordinates or set default coordinates
            const latitude = data.location.lat;
            const longitude = data.location.lon;

            // Initialize Mapbox map
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/m0rty01/clw0fg5nc07p801pecqo95rvy',
                center: [45.5019 , 73.5674],
                zoom: 11
            });

            // Add marker to the map
            new mapboxgl.Marker()
                .setLngLat([43.6532, 79.3832])
                .addTo(map);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherInfo(temperature, humidity, precipitation) {
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
    const precipitationElement = document.getElementById('precipitation');

    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    precipitationElement.textContent = `Precipitation: ${precipitation}mm`;
}
