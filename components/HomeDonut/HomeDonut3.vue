<template>
  <div class="donut">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import DonutChart from "./DonutChart";

export default {
    name: "HomeDonut3",
  components: {
    DonutChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["BAC","GS","JPM","PYPL","V"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#11633f", "#10c274", "#10c273", "#10c272", "#10c271"],
            data: [19.4, 16.8, 15.9, 18.2, 19.7]
          }
        ]
      }
    };
  }
}
</script>