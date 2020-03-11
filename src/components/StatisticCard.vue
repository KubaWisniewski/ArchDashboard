<template>
  <v-card min-height="550px" outlined>
    <v-card-title class="headline font-weight-bold pa-12"
      ><v-icon large color="#ee5d2c" class="mr-4">$statistics</v-icon
      >Statystyki</v-card-title
    >
    <v-divider></v-divider>
    <v-card-text class="statistic-content">
      <p>Wykres zrealizowanych sprzedaży do liczby udzielonych rabatów</p>
      <doughnut-chart class="chart" @generated="setLegend"></doughnut-chart>
      <div v-html="message"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import DoughnutChart from "./DoughnutChart";
export default {
  name: "StatisticCard",
  data: () => ({
    message: undefined
  }),
  methods: {
    setLegend(html) {
      this.message = html;
    }
  },
  components: { DoughnutChart }
};
</script>

<style scoped>
.chart {
  height: 200px;
  width: 200px;
}
.statistic-content {
  padding-left: 80px;
  padding-right: 80px;
}
.statistic-content p {
  font-size: 15px;
  line-height: 21px;
  color: #a1a1a1;
  font-weight: 300;
}
</style>
