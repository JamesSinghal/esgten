<template>
  <div class="donut">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import DonutChart from "./DonutChart";

export default {
    name: "HomeDonut1",
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
        labels: ["AAPL","AMZN","CDNS","FB","GOOGL","INTC","MSFT","NVDA"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#11633f", "#10c274", "#10c274F", "#10c274", "#10c274", "#10c274", "#10c274", "#10c274"],
            data: [24.6, 20.1, 6.2, 12.7, 10.3, 7.1, 14.2, 4.8]
          }
        ]
      }
    };
  }
}
</script>