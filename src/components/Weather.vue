<script setup>
import { ref, onMounted, watch } from "vue";

const apiKey = "f0c63e111b54a6824a1668b9cc0f0747";
const selectedCity = ref("Cianjur"); // Default kota Cianjur
const weatherData = ref(null);
const forecastData = ref([]);
const errorMessage = ref("");

const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch current weather data");
    }
    const data = await response.json();
    weatherData.value = {
      name: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    };
    errorMessage.value = "";
    fetchForecast(data.coord.lat, data.coord.lon);
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const fetchForecast = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=7&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data");
    }
    const data = await response.json();
    forecastData.value = data.list.map((item) => ({
      day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      description: item.weather[0].main,
    }));
    errorMessage.value = "";
  } catch (error) {
    errorMessage.value = error.message;
  }
};

onMounted(() => {
  fetchWeather(selectedCity.value);
});

watch(selectedCity, (newCity) => {
  fetchWeather(newCity);
});
</script>

<template>
  <section
    id="weather"
    class="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center p-4"
  >
    <div class="container mx-auto flex justify-center items-center">
      <div
        class="w-full max-w-4xl bg-blue-800 bg-opacity-80 rounded-lg shadow-lg p-6"
      >
        <!-- Header Section -->
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold uppercase tracking-wide">
            Weather Forecast
          </h1>
          <p class="text-lg mt-2">{{ weatherData?.name || "Loading..." }}</p>
          <p class="text-2xl font-semibold mt-1">{{ weatherData?.country }}</p>
          <div
            class="text-base text-slate-800 rounded-md font-bold text-right mb-3"
          >
            <select
              name="location"
              id="location"
              v-model="selectedCity"
              class="p-2 rounded-md"
            >
              <option value="Cianjur">Cianjur</option>
              <option value="Bandung">Bandung</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Sukabumi">Sukabumi</option>
            </select>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-between px-6"
          v-if="weatherData"
        >
          <div class="text-center sm:text-left">
            <p class="text-7xl font-bold">{{ weatherData.temp }}°C</p>
            <p class="text-lg font-medium mt-2">
              Feels like: {{ weatherData.feels_like }}°C
            </p>
            <p class="text-sm mt-1 capitalize">
              {{ weatherData.description }}
            </p>
          </div>
          <div class="text-right mt-4 sm:mt-0">
            <ul class="text-sm space-y-1">
              <li>
                Humidity:
                <span class="font-bold">{{ weatherData.humidity }}%</span>
              </li>
              <li>
                Pressure:
                <span class="font-bold">{{ weatherData.pressure }} MB</span>
              </li>
              <li>
                Wind:
                <span class="font-bold">{{ weatherData.wind_speed }} KM/H</span>
              </li>
              <li>
                Sunrise:
                <span class="font-bold">{{ weatherData.sunrise }}</span>
              </li>
              <li>
                Sunset: <span class="font-bold">{{ weatherData.sunset }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="errorMessage" class="text-center mt-4 text-red-500">
          {{ errorMessage }}
        </div>
        <div
          v-if="forecastData.length"
          class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-8"
        >
          <div
            v-for="(day, index) in forecastData"
            :key="index"
            class="text-center bg-blue-900 bg-opacity-70 rounded-lg p-3 shadow-md"
          >
            <p class="text-lg font-semibold">{{ day.day }}</p>
            <p class="text-sm mt-1">
              {{ day.temp_min }}° / {{ day.temp_max }}°
            </p>
            <p class="text-sm mt-2 capitalize">{{ day.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#portofolio {
  background-image: "./assets/imgs/clouds.png";
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
