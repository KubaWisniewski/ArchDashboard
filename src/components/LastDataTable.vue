<template>
  <v-card min-height="550px" outlined>
    <v-card-title class="headline font-weight-bold pa-9"
      ><v-icon large color="#ee5d2c" class="mr-4">$shopping</v-icon>Ostatnio
      dokonane zakupy <v-spacer></v-spacer>
      <!--      <v-text-field-->
      <!--        v-model="search"-->
      <!--        append-icon="mdi-magnify"-->
      <!--        label="Search"-->
      <!--        single-line-->
      <!--        hide-details-->
      <!--      ></v-text-field-->
      <!--    >-->
      <!--    -->
      <filter-shopping></filter-shopping>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="data-row"
      mobile-breakpoint="600px"
      hide-default-footer
    >
    </v-data-table>
  </v-card>
</template>

<script>
import FilterShopping from "./FilterShopping";
export default {
  name: "LastDataTable",
  components: { FilterShopping },
  data: () => ({
    search: "",
    headers: [
      {
        text: "KLIENT",
        value: "name"
      },
      { text: "PRODUKT", value: "product" },
      { text: "KWOTA", value: "amount" },
      { text: "WYKORZYSTANY RABAT", value: "discount" }
    ],
    items: [
      {
        name: "Paweł Nowakowski",
        product: "Elegant fence 1800/1950 x 1800mm",
        amount: "6000 $",
        discount: "10 %"
      },
      {
        name: "Karol Kowalski",
        product: "Modern fence 1200/1250 x 1200mm",
        amount: "4620 $",
        discount: "20 %"
      },
      {
        name: "Mariusz Kwiatkowski",
        product: "Elegant fence 1500/1250 x 1600mm",
        amount: "6000 $",
        discount: "15 %"
      },
      {
        name: "Karol Kowalski",
        product: "Moder fence 1200/1250 x 1200mm",
        amount: "4620 $",
        discount: "20 %"
      },
      {
        name: "Mariusz Kwiatkowski",
        product: "Elegant fence 1500/1250 x 1600mm",
        amount: "6000 $",
        discount: "15 %"
      }
    ]
  })
};
</script>

<style>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.01);
}
tr td:first-child {
  border-left: 4px solid transparent;
}
table {
  padding: 10px;
}
tr:hover td:first-child {
  border-left: solid #ee5d2c 4px !important;
  border-radius: 0 !important;
}
.v-data-table td,
.v-data-table th {
  height: 60px !important;
}
.theme--light.v-data-table tbody tr:not(:last-child) td,
.theme--light.v-data-table thead tr:last-child th {
  border-bottom: none !important;
  border-top: none !important;
}
tbody td{
  font-weight: bold;
}
tbody tr:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
