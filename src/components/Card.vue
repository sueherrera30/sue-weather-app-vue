<template>
  <div class="card">
    <p class="title">{{ title }}</p>
    <slot />
    <hr/>
    <InformationWeather />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InformationWeather from '../components/InformationWeather.vue';

export default {
  name: 'Card',
  props: {
    title: String
  },
  components: {
    InformationWeather,
  },
  computed: {
    ...mapGetters(['getWeatherMain']),
  },
  methods: {
     ...mapActions(["fetchWeatherData"]),

  },
  created() {
    this.$store.dispatch('fetchWeatherData', "Mexico")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  width: var(--cardWidth);
  height: 500px;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 0 70px rgb(0 0 0 / 30%);
  z-index: 9999;
  background: rgb(241, 241, 241);
  & hr {
    width: 100%;
    margin: 12px;
    color: #57beca;
  }
}
.title {
  margin: 16px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  font-size: 18px;
  color: #57beca;
  font-weight: 600;
  text-transform: capitalize;
}

</style>
