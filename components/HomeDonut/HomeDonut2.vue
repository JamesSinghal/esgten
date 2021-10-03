<template>
  <div class="donut">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import DonutChart from "./DonutChart";

export default {
    name: "HomeDonut2",
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
        labels: ["BA","HD","MRO","UNH","WST","XOM"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#11633f", "#10c274", "#10c273", "#10c272", "#10c271", "#10c270"],
            data: [16.9, 23.1, 11.6, 10.3, 17.9, 20.2]
          }
        ]
      }
    };
  }
}
</script>