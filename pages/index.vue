<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <div class="grad-bg absolute">
      <div class="bg-gradient-to-br from-grad_gray to-grad_blue"></div>
    </div>
    <sideBar></sideBar>
    <div id="app">
      <h1 class="hover:italic">To Do List</h1>
    </div>
  </div>
</template>

<script>
  import sideBar from "../components/sideBar.vue"

  export default {
    name: 'App',
    components: {
      sideBar,
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

.grad-bg {
  margin-left: 12vw;
  width: 88vw;
  height: 100vh;
}

.grad-bg > div {
  width: 100%;
  height: 100%;
}

#app {
  width: 86vw;
  margin-left: 14vw;
}
</style>
