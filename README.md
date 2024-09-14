# Weather App 🌦️

A simple weather app that provides real-time weather data for any city worldwide. Users can enter a city name, and the app fetches weather details such as temperature, humidity, and wind speed using the OpenWeatherMap API. The app also dynamically updates the weather icon based on the current conditions (e.g., rain, clouds, clear skies).

## Features
- 🌍 **Search weather by city name**: Get weather updates for any location.
- 🌡️ **Current temperature**: Displayed in Celsius.
- 💨 **Humidity and wind speed**: Provides additional weather details.
- 🎨 **Clean, user-friendly interface**: Easy to navigate and use.
- 🔍 **Error handling**: Displays an error message for invalid city names.
- 🔄 **Dynamic weather icons**: Auto-updates based on weather conditions (clouds, rain, mist, etc.).

## Technologies Used
- **HTML5** for structure.
- **CSS3** for styling.
- **JavaScript** for functionality.
- **OpenWeatherMap API** for real-time weather data.

## How to Use
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```
2. Open the `index.html` file in your browser.
3. Enter the name of a city in the search box.
4. Click the search or Enter to view the current weather.

## API Key
This project uses the OpenWeatherMap API. To use it, you'll need to include your own API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get a free API key.
2. Replace the API key in the `script.js` file with your own:
    ```javascript
    const APIKey = "your_api_key_here";
    ```

Feel free to fork and contribute to the project. Happy coding! 🚀
