<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data: () => ({
    options: {
      legend: false,
      responsive: true,
      maintainAspectRatio: false,
      legendCallback: function(chart) {
        const legendHtml = [];
        legendHtml.push("<ul>");
        const item = chart.data.datasets[0];
        for (var i = 0; i < item.data.length; i++) {
          legendHtml.push(
            `<li class="d-flex justify-space-between align-center">${chart.data.labels[i]} <span>${item.data[i]} %</span></li>`
          );
        }
        legendHtml.push("</ul>");
        return legendHtml.join("");
      }
    }
  }),
  mounted() {
    const gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, -30, 300);
    gradient.addColorStop(0, "#f15922");
    gradient.addColorStop(1, "#002ac1");
    this.renderChart(
      {
        labels: ["Udzielonych rabatów", "Zrealizowane sprzedaże"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: [gradient, "rgba(0, 0, 0, 0.1)"],
            data: [36, 64]
          }
        ]
      },
      this.options
    );
    const HTML = this.$data._chart.generateLegend();
    this.$emit("generated", HTML);
  }
};
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0 !important;
}
li {
  text-justify: distribute-all-lines;
}
li span {
  font-size: 36px;
  line-height: 60px;
  color: #000000;
  font-weight: 300;
}
</style>
