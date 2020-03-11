<template>
  <v-navigation-drawer app floating width="270px">
    <v-container class="fill-height flex-column pa-0" fluid>
      <img id="logo" class="ma-5" alt="Logo" src="../assets/LogoDash.png" />

      <v-list nav dense class="mb-12">
        <v-list-item align="center">
          <img
            id="avatar"
            alt="Avatar"
            src="../assets/Avatar.png"
            class="ma-auto"
          />
        </v-list-item>
        <v-list-item align="center">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold"
              >Ewa Kwiatkowska</v-list-item-title
            >
            <v-list-item-subtitle>Architekt</v-list-item-subtitle>
            <v-list-item-subtitle
              ><v-icon small color="#ee5d2c" class=" ma-1 ">$settings</v-icon>
              <v-icon small class="ma-1 grey--text">$logout</v-icon>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list nav dense id="menu">
        <b class="ml-12">Twoje manu:</b>

        <v-list-item-group>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            active-class="menu-active"
            class="menu"
            color="#ee5d2c"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                style="color: black"
                class="font-weight-bold"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container></v-navigation-drawer
  >
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    item: 1,
    items: [
      { title: "Przegląd", icon: "$home", to: "/dashboard" },
      { title: "Raport sprzedaży", icon: "$report" },
      { title: "Udzielone rabaty", icon: "%" },
      { title: "Dane osobowe", icon: "$person" },
      { title: "Finanse", icon: "$finance" }
    ]
  })
};
</script>

<style scoped>
#avatar {
  border: 1px solid #c7a275;
  padding: 5px;
  border-radius: 66px;
}
.menu-active {
  border-left: solid #ee5d2c 4px !important;
  border-radius: 0 !important;
}
.menu-active::before {
  background-color: white;
}
.menu {
  border-left: solid transparent 4px;
  border-radius: 0;
}
#menu {
  width: 100%;
  padding: 0;
}
.v-navigation-drawer__content {
  margin-right: 87px;
}
</style>
