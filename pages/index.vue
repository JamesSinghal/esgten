<template>
  <div class="fullscreen">
    <link rel="stylesheet" href="styles.css">
    <div class="grad-bg absolute opacity-30">
      <div class="grad-bg bg-gradient-to-br from-grad_gray to-grad_blue"></div>
    </div>
    <sideBar></sideBar>
    <div id="app">
      <h1 class="hover:italic">To Do List</h1>
      <lineGraph></lineGraph> 
    </div>
  </div>
    <div class="graph">
    <div id="graphLine">
    <HomeLine/>
    </div>
    <div id="graphBar">
    <BarChart :data="barChartData" :options="barChartOptions" :height="400" />
  </div>
  </div>
</template>

import HomeLine from "../components/HomeLine";

<script>
  // import * as d3 from "d3"
  import lineGraph from "../components/lineGraph.vue"
  import sideBar from "../components/sideBar.vue"

  export default {
    name: 'App',
    components: {
      lineGraph,
      sideBar, HomeLine
    },
    data() {
    return {
      barChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    };
  },
  }


</script>


<style>

#graphLine{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
  margin-top: 60px;
  width: 30%;
  height: 30%;
}


/* BarGraph main */
#graphBar{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  width: 30%;
  height: 30%;
}


@tailwind base;
@tailwind components;
@tailwind utilities;

.fullscreen {
  height: 100vh;
  width: 100vw;
}

.grad-bg {
  text-align: right;
  width: 88vw;
  height: 100vh;
}

#app {
  width: 87vw;
  margin-left: 14vw;
}
</style>
