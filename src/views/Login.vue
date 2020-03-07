<template>
  <v-col class="col-lg-6 fill-height">
    <logo></logo>
    <login-form></login-form>
  </v-col>
</template>

<script>
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

export default {
  name: "Login",
  components: { LoginForm, Logo }
};
</script>
<style>
.col {
  padding: 0;
  margin: 0;
  min-width: calc(100% - 960px);
}
</style>
