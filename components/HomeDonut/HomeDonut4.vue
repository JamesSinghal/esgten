<template>
  <div class="donut">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import DonutChart from "./DonutChart";

export default {
    name: "HomeDonut4",
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
        labels: ["BAC","GS","INTC","T","V"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#11633f", "#10c274", "#10c273", "#10c272", "#10c271"],
            data: [32.2, 26.7, 11.4, 12.9, 16.8]
          }
        ]
      }
    };
  }
}
</script>