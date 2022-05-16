<template>
  <div class="mainContainer">
    <img
      class="weather-icon"
      alt="weather icon"
      :src="getWeatherMain.temp === 0 ? '' :'http://openweathermap.org/img/wn/'+getWeatherMain.icon+'d@2x.png'"
    >
    <span class="number">{{getWeatherMain.temp}}</span>
    <span class="tempSymbol">°</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TemperatureContainer',
  computed : {
    ...mapGetters(["getWeatherMain"])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.weather {
  &-icon {
    position: absolute;
    top: -35px;
    left: -35px;
    width: 110px;
    height: 110px;
    background-repeat: no-repeat;
    background-size: 100%;
    filter: drop-shadow(1px 1px 0 fade(black, 3))
      drop-shadow(-5px -5px 0 fade(black, 8));
    &[src=""] {
      display:none;
    }
  }
}
@media (max-height: 767px) {
  .weather-main {
    margin-top: 30px;
    margin-bottom: 30px;
    .weather-temp {
      width: 125px;
      height: 125px;
      margin: 30px 0;
    }
  }
}
.mainContainer {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: initial;
  border-radius: 100%;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
  background-color: #fff;
  margin: 40px 0;
}
.number {
  font-size: 80px;
  font-weight: 800;
  letter-spacing: -2px;
  position: relative;
}
.tempSymbol {
  position: relative;
  top: -21px;
  font-size: 40px;
}

</style>
