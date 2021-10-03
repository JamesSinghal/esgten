<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <backGrad></backGrad>
    <sideBar></sideBar>
    <div id="app">
      <h1 class="hover:italic">Portfolios</h1>
    </div>
  </div>
</template>

<script>
  import sideBar from "../components/sideBar.vue"
  import backGrad from "../components/backGrad.vue"

  export default {
    name: 'App',
    components: {
      sideBar,
      backGrad,
    },
  }
</script>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.fullscreen {
  height: 100vh;
  width: 100vw;
}

#app {
  width: 100vw;
  margin-left: 12vw;
}
</style>
