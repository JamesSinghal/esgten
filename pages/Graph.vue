<template>
  <div class="graph">
    <div id="wrapperLine">
      <div id="graphLine">
      <HomeLine/>
      </div>
    </div>
    <div id="wrapperGraph">
      <div id="graphBar">
      <BarChart :data="barChartData" :options="barChartOptions" :height="400" />
  </div>
  </div>
  </div>
</template>

<script>
//import LineChart + BarGraph
import HomeLine from "../components/HomeLine";
// import HomeBar from "../components/HomeBar";

//LineChart main
export default {
  name: "App",
  components: {
    HomeLine
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
          fontSize: 3,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 50,
            // fontColor: "#6b7280",
          fontColor: "#f03800",
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
              ticks: {
                fontSize: 10,
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

@tailwind base;
@tailwind components;
@tailwind utilities;

.fullscreen {
  height: 100vh;
  width: 100vw;
}


#wrapperLine {
  border-width: 20px;
  padding: 10px;
  margin: 10px;
  width: 25vw;
  height: auto;
}

#wrapperGraph{
  border-width: 20px;
  padding: 10px;
  margin: 10px;
  width: 30vw;
  height: auto;
}

#graphLine{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 12vh;
  margin-left: 14vw;
  margin-right: 14vw; */
  width: 100%;
  height: 100%;
}

/* BarGraph main */
/* #graphBar{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: top;
  color: #2c3e50;
  width: 100%;
  height: 100%;
} */

</style>