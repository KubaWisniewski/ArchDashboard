<template>
  <v-card class="d-flex justify-space-around flex-wrap align-center" outlined>
    <v-card-title class="headline font-weight-bold pa-9"
      ><v-icon large color="#ee5d2c" class="mr-4">$finance</v-icon
      >Finanse</v-card-title
    >
    <v-card flat
      ><v-card-text class="d-flex align-center"
        ><v-icon color="#12c300" class="mr-4">$financesToPayment</v-icon>Finanse
        do wypłaty: <span> 1506 zł</span></v-card-text
      ></v-card
    >
    <v-card flat
      ><v-card-text class="d-flex align-center"
        ><v-icon color="#12c300" class="mr-4">$shoppingDone</v-icon>Wykonane
        zakupy: <span> 81 543 zł </span></v-card-text
      ></v-card
    >
    <v-card flat
      ><v-card-text class="d-flex  align-center"
        ><v-icon color="#12c300" class="mr-4">$totalPayment</v-icon>Wypłaciłeś
        łącznie: <span> 5 176 zł</span></v-card-text
      ></v-card
    >
  </v-card>
</template>

<script>
export default {
  name: "FinancesCard"
};
</script>

<style scoped>
.v-card__text {
  font-size: 15px !important;
  line-height: 15px;
  color: #a1a1a1;
  font-weight: 300;
}
.v-card__text span {
  font-size: 36px !important;
  line-height: 60px;
  color: #1d1d1d;
  margin-left: 5px;
}
</style>
