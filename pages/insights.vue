<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <backGrad></backGrad>
    <sideBar></sideBar>
    <div id="app">
      <div id="insight-flex" class="grid2x2">
        <div id="ports-panel" class="panel box box1">
          <div class="ports-port">
            <div style="background-color:lightgreen" class="port-score-box">9.0</div>
            <div class="port-info">DFS</div>
          </div>
          <div class="ports-port">
            <div style="background-color:yellow" class="port-score-box">7.7</div>
            <div class="port-info">y</div>
          </div>
          <div class="ports-port">
            <div style="background-color:orange" class="port-score-box">6.3</div>
            <div class="port-info">y</div>
          </div>
          <div class="ports-port">
            <div style="background-color:red" class="port-score-box">5.7</div>
            <div class="port-info">y</div>
          </div>
        </div>
        <div id="stock-panel" class="panel box box2">
          <div class="stock-port">
            <div style="background-color:lightgreen" class="stock-score-box">9.0</div>
            <div class="stock-info">DFS</div>
          </div>
          <div class="stock-port">
            <div style="background-color:yellow" class="stock-score-box">7.7</div>
            <div class="stock-info">y</div>
          </div>
          <div class="stock-port">
            <div style="background-color:orange" class="stock-score-box">6.3</div>
            <div class="stock-info">y</div>
          </div>
          <div class="stock-port">
            <div style="background-color:red" class="stock-score-box">5.7</div>
            <div class="stock-info">y</div>
          </div>
          <div class="stock-port">
            <div style="background-color:red" class="stock-score-box">5.7</div>
            <div class="stock-info">y</div>
          </div>
        </div>
        <div class="panel box box3"></div>
        <div id="pies-panel" class="panel box box4"><div>
          <HomeDonut1></HomeDonut1>
          <HomeDonut2></HomeDonut2>
          <HomeDonut3></HomeDonut3>
          <HomeDonut4></HomeDonut4>
          </div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import sideBar from "../components/sideBar.vue"
  import backGrad from "../components/backGrad.vue"
  import HomeDonut1 from "../components/HomeDonut/HomeDonut1.vue"
  import HomeDonut2 from '../components/HomeDonut/HomeDonut2.vue'
  import HomeDonut3 from "../components/HomeDonut/HomeDonut3.vue"
  import HomeDonut4 from '../components/HomeDonut/HomeDonut4.vue'

  export default {
    name: 'App',
    components: {
      sideBar,
      backGrad,
      HomeDonut1,
      HomeDonut2,
      HomeDonut3,
      HomeDonut4
    },
  }
</script>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.stock-score-box {
  width: 3vw;
  text-align: center;
}

.stock-port {
  height: 6.4vh;
  border-bottom-width: 2px;
}

.stock-info {
   padding-top: 1.5vh;
}


.ports-port {
  height: 8vh;
  border-bottom-width: 2px;
}

.ports-port > div {
  padding-top: 1.5vh;
}

.port-score-box {
  width: 3vw;
  text-align: center;
}

.port-info {
  width: 17vw;
  padding-left: 1.5vw;
}

#ports-panel > hr {
  height: 1vh;
}

#insight-flex {
  width:88vw;
  padding:2vw;
}

#ports-panel {
  width:20vw;
  height:32 vh;
}

#pies-panel {
  height:20vh;
}

#ports-summ {
  height: 30vh;
  width: 15vw;
}

.grid2x2 {
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.panel {
  display: flex; 
  flex-basis: calc(50% - 40px);  
  flex-direction: column;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 7px -3px #b9b9b9;
}

.grid2x2 > div > div {
  display: flex;
  flex-direction: row;
}

.box { margin: 2vh; }

.panel {
  margin: 3vh;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 4px 0px 7px -3px #b9b9b9;
}

#timetrend {
  height: 30vh;
  width: 30vw;
}

#treemap {
  height: 30vh;
  width: 30vw;
}

#distribution {
  height: 30vh;
  width: 30vw;
}

.fullscreen {
  height: 100vh;
  width: 100vw;
}

#app {
  width: 88vw;
  margin-left: 12vw;
}
</style>
