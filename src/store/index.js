import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiBase: "https://api.openweathermap.org/data/2.5/",
    apiKey: "137c47222e68ff1b9668ee2fb5a4cbac",
    defaultSearch: "istanbul",
    search: "",
    isError: false,
    weatherData: {
      temp: 34,
      feelsLike: 34,
      description: '',
      info: 'Clouds',
      icon: '',
      name: '',
    },
  },
  getters: {
    getWeatherMain(state) {
      const { temp, feelsLike, description, icon, info, name } = state.weatherData;
      return {
        temp,
        feelsLike,
        description,
        info,
        icon,
        name
      };
    },
    getWeatherInfo(state) {
      const { wind, clouds, humidity } = state.weatherData;
      return {
        wind,
        clouds,
        humidity,
      };
    },
    getWeatherCountry(state) {
      return state.weatherData.country;
    },
  },
  mutations: {
    ["SET_WEATHER_DATA"](state, data) {
      state.weatherData = data;
    },
    ["SET_SEARCH"](state, searchDone) {
      state.search = searchDone.toLowerCase();
    },
  },
  actions: {
    async fetchWeatherData({ commit, state }, search) {
      try {
        commit("SET_SEARCH", search);
        const response = await axios.get(
          `${state.apiBase}weather?q=${search}&units=metric&APPID=${state.apiKey}`
        );
        const newWeatherData = {
          name: response.data.name,
          temp: response.data.main.temp,
          tempMin: response.data.main.temp_min,
          tempMax: response.data.main.temp_max,
          feelsLike: response.data.main.feels_like,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon.substring(0, 2),
          info: response.data.weather[0].main,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          clouds: response.data.clouds.all,
          country: response.data.sys.country,
        };
        commit("SET_WEATHER_DATA", newWeatherData);
        commit("SET_ERROR", false);
        console.log('data from state', state.weatherData);
        console.log('data from request', newWeatherData);
      } catch (error) {
        console.log(error);
        commit("SET_WEATHER_DATA", {});
      }
    },
  },
})
