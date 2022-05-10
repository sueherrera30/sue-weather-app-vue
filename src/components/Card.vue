<template>
  <div class="card">
    <p class="title">{{ title }}</p>
    <slot />
     <span>{{getWeatherMain.name}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Card',
  props: {
    title: String
  },
  computed: {
    ...mapGetters(['getWeatherMain'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
.title {
  margin: 16px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  font-size: 22px;
  color: #3d5674;
  font-weight: 600;
}

</style>
