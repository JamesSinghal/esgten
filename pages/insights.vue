<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <backGrad></backGrad>
    <sideBar></sideBar>
    <div id="app">
      <div id="ports-summ">
        <ul id="ports-list">
          <li>test</li>
          <li><hr></li>
          <li>test1</li>
          <li><hr></li>
          <li>test2</li>
          <li><hr></li>
          <li>test3</li>
        </ul>
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

#ports-list {
  height: 30vh;
  width: 50vw;
  
}

#ports-summ {
  margin: 10vh;
  height: 30vh;
  width: 50vw;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 4px 0px 7px -3px #b9b9b9;
}

.fullscreen {
  height: 100vh;
  width: 100vw;
}

#app {
  width: 100vw;
  margin-left: 12vw;
}
</style>
