<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <backGrad></backGrad>
    <sideBar></sideBar>
    <div class="grid2x2">
      <div class="box box1"><div>one</div></div>
      <div class="box box2"><div>two</div></div>
      <div class="box box3"><div>three</div></div>
      <div class="box box4"><div>four</div></div>
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
  width: 15vw;
}

.grid2x2 {
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.grid2x2 > div {
  display: flex; 
  flex-basis: calc(50% - 40px);  
  justify-content: center;
  flex-direction: column;
}

.grid2x2 > div > div {
  display: flex;
  justify-content: center;
  flex-direction: row;
    border-radius: 5px;
  background: #ffffff;
  box-shadow: 4px 0px 7px -3px #b9b9b9;
}

.box { margin: 2vh; }

#panel {
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
  width: 100vw;
  margin-left: 12vw;
}
</style>
