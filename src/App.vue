<template>
  <!-- <div
    id="app-container"
    class="container has-text-centered"
  > -->
  <!-- <img src="./assets/logo.png"> -->
  <router-view />
  <!-- </div> -->
</template>

<script lang="ts">
import "bulma";
import "@/assets/css/core.css";
import "jquery";

export default {
  name: "App"
};
</script>

<style lang="scss">
$font-stack: "Avenir", Helvetica, Arial, sans-serif;

#app-container {
  font-family: $font-stack;
}
</style>
