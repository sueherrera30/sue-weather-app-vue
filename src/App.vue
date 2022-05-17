<template>
  <div class="mainContainer">
    <transition name="fade" mode="out-in" appear v-if="getError">
      <Card title="hey!, should I wear flip flops or scarf?">
        <div v-if="getError">
          <NoFoundCity />
          <SearchBar />
        </div>
      </Card>
    </transition>
    <transition name="fade" mode="out-in" appear v-else>
      <Card title="hey!, should I wear flip flops or scarf?">
        <SearchBar />
        <TemperatureContainer />
        <hr/>
        <InformationWeather />
      </Card>
    </transition>
    <WeatherAnimate />
  </div>
</template>

<script>
import Card from './components/Card.vue';
import SearchBar from './components/SearchBar.vue';
import { mapGetters } from 'vuex';
import TemperatureContainer from './components/temperatureContainer.vue';
import NoFoundCity from "./components/NoFound.vue"
import WeatherAnimate from "@/components/WeatherAnimate.vue";
import InformationWeather from "./components/InformationWeather.vue"

export default {
  name: 'App',
  components: {
    Card,
    SearchBar,
    TemperatureContainer,
    NoFoundCity,
    InformationWeather,
    WeatherAnimate,
  }, 
  computed: {
    ...mapGetters(['getError']),
  },
  updated() {
    console.log('error de app', this.getError);
  }
}
</script>

<style lang="less">
:root {
  --cardWidth: 400px;
  --darkColor: #666;
  --grayColor: #999;
  --cardBgColor: #f1f1f1;
  --cloudAnimateTime: 150s;
  --clearAnimationTime: 120s;
  --snowAnimateTime: 15s;
  --rainAnimateTime: 70s;
}
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainContainer {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
body {
  background-color: fade(#000, 30);
  overflow: hidden;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.card {
  max-width: var(--cardWidth);
  width: 100%;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 0 70px fade(black, 30);
  z-index: 9999;
  background-color: var(--cardBgColor);
  @media (max-height: 767px) {
    padding: 30px;
  } 
}
@media (max-width: 480px) {
  .card {
    padding: 30px;
    max-width: 90%;

  }
}
@media (max-width: 375px) {
  .card {
    font-size: 12px;
  }
}
</style>
