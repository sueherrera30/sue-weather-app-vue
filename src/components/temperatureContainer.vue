<template>
  <div class="mainContainer">
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
<style scoped>
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
