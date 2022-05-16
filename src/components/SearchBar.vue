<template>
  <div class="SearchBar-container">
    <input class="searchBar" type="search" placeholder="Busca una ciudad" @change="getData" v-model="citySearched" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'SearchBar',
  data() {
    return {
       citySearched: '',
    }
  },
  computed: {
    ...mapGetters(["getWeatherMain", "getWeatherInfo", "getWeatherCountry"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getData() {
      this.fetchWeatherData(this.citySearched)
    },
  },
  mounted() {
    setTimeout(() => {
      this.citySearched = this.getWeatherMain.name;
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchBar-container{
  width: 100%;
  text-align: center;
}
.searchBar {
  height: 50px;
  border: 2px solid rgba(0,0,0,.1);
  border-radius: 100px;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  padding-left: 25px;
  padding-right: 25px;
  transition: all .4s;
  font-family: 'Quicksand', sans-serif;
  width: 100%;
}
.searchBar:focus {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 8px 16px rgb(0 0 0 / 25%);
    border-color: rgba(0,0,0,.05);
    font-weight: 900;
}
</style>
