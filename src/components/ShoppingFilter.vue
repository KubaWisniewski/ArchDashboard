<template>
  <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <v-icon large color="#ee5d2c" class="mr-2">$filter</v-icon>Filter
      </v-btn>
    </template>
    <v-card class="pa-5"
      ><v-card-title class="headline font-weight-bold justify-center"
        >Filter</v-card-title
      >
      <v-text-field
        label="Wyszukaj"
        v-model="value"
        @input="changeSearch()"
      ></v-text-field>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "FilterShopping",
  props: ["value"],
  methods: {
    changeSearch() {
      this.$emit("changeSearch", this.value);
    }
  }
};
</script>

<style scoped>
* {
  text-transform: capitalize !important;
}
</style>
