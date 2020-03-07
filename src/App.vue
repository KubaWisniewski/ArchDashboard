<template>
  <v-app>
    <v-content class="background">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({})
};
</script>
<style>
.background {
  background-image: url("./assets/Background.jpg");
  background-position-x: 224px;
}
</style>
