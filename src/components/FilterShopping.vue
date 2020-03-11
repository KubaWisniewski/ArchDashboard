<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <v-icon large color="#ee5d2c" class="mr-2">$filter</v-icon>Filter
      </v-btn>
    </template>
  </v-menu>
</template>

<script>
export default {
  name: "FilterShopping"
};
</script>

<style scoped>
* {
  text-transform: capitalize !important;
}
</style>
