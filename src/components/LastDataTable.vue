<template>
  <v-card min-height="550px" outlined>
    <v-card-title class="headline font-weight-bold"
      ><v-icon large color="#ee5d2c" class="mr-2">$shopping</v-icon>Ostatnio
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
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="ma-2"
      hide-default-footer
    ></v-data-table>
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

<style scoped></style>
