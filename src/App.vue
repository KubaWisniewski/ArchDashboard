<template>
  <v-app>
    <navigation v-if="loggedIn"></navigation>
    <app-bar v-if="loggedIn"></app-bar>
    <v-content
      :class="{ 'background-login': !loggedIn, 'background-dash': loggedIn }"
    >
      <router-view></router-view>
    </v-content>
    <Footer v-if="loggedIn"></Footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["loggedIn"])
  },
  components: { Footer, AppBar, Navigation }
};
</script>
<style>
.background-dash {
  height: 100%;
  width: 100%;
  --gradient-break: calc(100% - 345px);
  background-image: linear-gradient(
    to top,
    #fffbf8 var(--gradient-break),
    #002ac1 var(--gradient-break)
  );
}
.background-login {
  background-image: url("./assets/Background.jpg");
  background-position-x: 224px;
}
svg {
  fill: currentColor;
}
</style>
