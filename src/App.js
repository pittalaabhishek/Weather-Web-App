import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import "./App.css"

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
}

function WeatherApp() {
  const [city, setCity] = useState("");

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["weatherData", city],
    queryFn: async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=372f3d6ad8b8405307d36d5b2662513e&units=metric`
      );
      if (!response.ok) {
        throw new Error('Enter a Valid city name');
      }
      return response.json();
    },
    enabled: false,
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred: {error.message}</p>}
      {data && (
        <div>
          <h3>Weather in {data.name}</h3>
          <p>Condition: {data.weather[0].description}</p>
          <p>Temperature: {data.main.temp}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
        </div>
      )}
    </div>
  );
}
