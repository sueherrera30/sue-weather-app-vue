<template>
  <div :class="['mainContainer',  {'fontsColor': getWeatherMain.info == 'Fog' || getWeatherMain.temp <= 20}]">
    <WindIcon /><span>{{getWeatherInfo.wind}}</span>
    <CloudIcon /><span>{{getWeatherInfo.clouds}}%</span>
    <DropletIcon/><span>{{getWeatherInfo.humidity}}%</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { DropletIcon, WindIcon, CloudIcon } from 'vue-feather-icons'

export default {
  name: 'InformationWeather',
  components: {
      DropletIcon,
      WindIcon,
      CloudIcon,
  },
    computed : {
    ...mapGetters(["getWeatherMain", "getWeatherInfo"])
  },
}
</script>

<style scoped lang="less">
    .mainContainer {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        flex-direction: initial;
        height: 30px;
        & svg {
            color: #57beca;
        }
    }
    .fontsColor {
         & svg {
            color: #67704b;
        }
    }
</style>
