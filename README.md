Weather App



This is a simple React application that fetches weather data using React Query and displays the weather conditions, temperature, and icon for a given city. Users can enter the name of a city to get real-time weather updates.

Features

1.Fetch weather data using React Query.

2.Display city name, weather description, and temperature.

3.Show weather condition icons.

4.Handle API errors and loading states.

Technologies Used

React: JavaScript library for building user interfaces.
React Query: A library for data fetching, caching, and synchronization in React applications.
OpenWeather API: Provides current weather data.

API Key

To fetch weather data from OpenWeather, you need an API key. You can obtain one by signing up at OpenWeather.

Once you have your API key, replace the key in the following line of the code:

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`


Usage

1.Open the app in your browser.
2.Enter a city name in the input field.
3.Click the "Search" button to fetch the weather data.
4.The weather details for the city, including temperature and weather condition, will be displayed.
