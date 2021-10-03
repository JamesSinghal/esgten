<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <backGrad></backGrad>
    <sideBar></sideBar>
    <div id="app">
      <div id="ports-summ" class="panel">
        <ul id="ports-list" class="flex flex-col panel">
          <div>1</div>
          <div><hr></div>
          <div>2</div>
          <div><hr></div>
          <div>3</div>
          <div><hr></div>
          <div>4</div>
        </ul>
      </div>
      <div id="donut-chart">
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
  padding-top: 1vh;
  padding-bottom: 1vh;
}

#ports-summ {
  height: 30vh;
  width: 40vw;
}

.panel {
  margin: 10vh;
  height: 30vh;
  width: 50vw;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 4px 0px 7px -3px #b9b9b9;
}

#donut-chart {

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
