import Vue from "vue";
import Vuetify from "vuetify/lib";
import PersonIcon from "../components/icons/PersonIcon";
import ArrowIcon from "../components/icons/ArrowIcon";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      person: {
        component: PersonIcon
      },
      arrow: {
        component: ArrowIcon
      }
    }
  }
});
