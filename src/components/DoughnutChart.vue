<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data: () => ({
    options: {
      legend: false,
      legendCallback: function(chart) {
        const legendHtml = [];
        legendHtml.push("<ul>");
        const item = chart.data.datasets[0];
        for (var i = 0; i < item.data.length; i++) {
          legendHtml.push(`<li>${chart.data.labels[i]} ${item.data[i]} %</li>`);
        }
        legendHtml.push("</ul>");
        return legendHtml.join("");
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted: function() {
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
  },
  methods: {}
};
</script>

<style></style>
