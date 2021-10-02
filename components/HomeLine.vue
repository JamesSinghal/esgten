<template>
  <div class="line">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart";

export default {
  name: "HomeLine",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        labels: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8", "week 9", "week 10"],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 211, 247],
            label: "Facebook",
            borderColor: "#3e95cd",
            fill: false
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 678, 423, 231],
            label: "Apple",
            borderColor: "#8e5ea2",
            fill: false
          },
          {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Amazon",
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 231, 332],
            label: "Netflix",
            borderColor: "#e8c3b9",
            fill: false
          },
          {
            data: [112, 213, 271, 283, 323, 265, 387, 172, 312, 433],
            label: "Google",
            borderColor: "#c45850",
            fill: false
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

