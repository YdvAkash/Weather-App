# Weather App

A simple weather lookup page built with HTML, CSS, and JavaScript. Enter a city and click the search button to request current conditions from OpenWeatherMap.

## Try it

- [Live demo](https://akashyadav-weather-app.netlify.app/)
- See `weather.jpg` in this repository for a screenshot.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. Enter a city name and click the search icon. An internet connection is required for the weather API and icon images.

The weather request is implemented in the inline script in `index.html`. There is also a `script.js` file with similar code, but `index.html` does not load it.

## Current behavior and limitations

- Shows the returned city, temperature in Celsius, humidity, and wind speed.
- Searches only when the button is clicked; pressing Enter is not wired up.
- Does not currently display a friendly message for invalid cities, API errors, or network failures.
- Weather data depends on the OpenWeatherMap API being available and the configured key being valid.

## API key security

The current implementation includes an OpenWeatherMap API key in client-side JavaScript. Browser-delivered keys are visible to visitors and must **not** be treated as secret. Review the key's usage and restrictions, rotate it if needed, and use a server-side endpoint if private credentials are required.
