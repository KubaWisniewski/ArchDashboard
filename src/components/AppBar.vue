<template>
  <v-app-bar id="app-bar" color="rgb(255, 255, 255,0)" height="140px" app flat
    ><v-container class="flex-row justify-space-between fill-height pt-12 pb-12"
      ><v-spacer></v-spacer>
      <v-btn text ripple to="/" class="white--text pa-2 mr-12">Fences</v-btn>
      <v-btn text ripple to="/" class="white--text pa-2 mr-12 ml-12"
        >About us</v-btn
      >
      <v-btn text ripple to="/" class="white--text pa-2 mr-12 ml-12">
        Contact Us</v-btn
      ><v-spacer></v-spacer>
      <span>
        <v-icon class="white--text ma-2">$loupe</v-icon
        ><v-icon class="white--text ma-2">$cart</v-icon>
      </span>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>
<style scoped>
#app-bar {
  position: absolute !important;
}
</style>
