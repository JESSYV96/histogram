<script lang="ts" setup>
import Histogram from "./components/HistogramVue.vue";
</script>

<template>
  <h2>Distribution de nombres</h2>
  <Suspense>
    <Histogram />
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
