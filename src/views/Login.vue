<template>
  <v-col class="col-lg-6 fill-height">
    <img id="logo" alt="Logo" src="../assets/Logo.png" />
    <login-form></login-form>
  </v-col>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "Login",
  components: { LoginForm }
};
</script>
<style scoped>
.col {
  padding: 0;
  margin: 0;
  min-width: calc(100% - 960px);
}
#logo {
  position: absolute;
  top: 51px;
  left: 47px;
}
</style>
