<template>
  <v-container class="background">
    <v-row
      ><v-col class="col-lg-8"> <last-data-table></last-data-table></v-col
      ><v-col class="col-lg-4"> <statistics-card></statistics-card></v-col
    ></v-row>
    <v-row>
      <v-col cols="12">
        <finances-card></finances-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LastDataTable from "../components/LastDataTable";
import StatisticsCard from "../components/StatisticsCard";
import FinancesCard from "../components/FinancesCard";

export default {
  name: "Dashboard",
  components: {
    FinancesCard,
    StatisticsCard,
    LastDataTable
  }
};
</script>

<style scoped>
.background {
  padding-left: 87px;
  padding-right: 60px;
}
</style>
