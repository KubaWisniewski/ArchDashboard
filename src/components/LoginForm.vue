<template>
  <v-container class="white fill-height" fluid>
    <v-row align="center" justify="center">
      <v-card color="rgba(0,0,0,0)" flat>
        <v-card-title
          ><v-icon color="rgb(238,93,44)" id="personIcon">$person</v-icon
          >Zaloguj się do Strefy Architekta</v-card-title
        >
        <v-divider></v-divider>
        <p>Podaj swoje dane. Adres e-mail oraz hasło:</p>

        <v-form>
          <v-text-field
            label="Twój e-mail"
            name="email"
            type="email"
            height="50px"
            class="elevation-0"
            solo
          />
          <v-text-field
            id="password"
            label="Hasło"
            type="password"
            height="50px"
            class="elevation-0"
            solo
          />
        </v-form>
        <v-btn
          class="white--text"
          color="rgb(238,93,44)"
          height="50px"
          block
          to="/dashboard"
          >Zaloguj <v-icon id="arrowIcon">$arrow</v-icon></v-btn
        >
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>
<style>
#personIcon {
  color: #ee5d2c;
  margin-right: 10px;
}
#arrowIcon {
  color: #ffffff;
  margin-left: 10px;
}
.v-text-field,
.v-btn {
  border-radius: 0;
  box-shadow: none !important;
}
.v-input__slot {
  background: #f7f7f7 !important;
  box-shadow: none !important;
  border: 1px solid #f3f3f3;
}
p {
  color: #a1a1a1;
  font-size: 15px;
  line-height: 21px;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 30px;
}
.v-card__title {
  font-size: 26px;
  line-height: 48px;
  color: #000000;
  font-weight: bold;
}
.v-label {
  font-size: 15px;
  line-height: 18px !important;
}
</style>
