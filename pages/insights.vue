<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <backGrad></backGrad>
    <sideBar></sideBar>
    <div id="app">
      <div id="ports-summ">
          test
      </div>
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

#ports-summ {
  margin: 5vw;
  margin-top: 0vw;
  border-radius: 0px;
  background: #e0e0e0;
  box-shadow: 0px 0px 10px 5 #b9b9b9;
}

.fullscreen {
  height: 100vh;
  width: 100vw;
}

#app {
  width: 86vw;
  margin-left: 14vw;
}
</style>
