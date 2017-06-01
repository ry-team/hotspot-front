<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped>
@import "./assets/main.css";
  .abs {
    display: flex;
  }
</style>
