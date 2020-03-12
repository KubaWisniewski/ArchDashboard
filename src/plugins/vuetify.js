import Vue from "vue";
import Vuetify from "vuetify/lib";
import PersonIcon from "../components/icons/PersonIcon";
import ArrowIcon from "../components/icons/ArrowIcon";
import EnvelopeIcon from "../components/icons/EnvelopeIcon";
import CartIcon from "../components/icons/CartIcon";
import LoupeIcon from "../components/icons/LoupeIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import HomeIcon from "../components/icons/HomeIcon";
import FinanceIcon from "../components/icons/FinanceIcon";
import ReportIcon from "../components/icons/ReportIcon";
import ShoppingIcon from "../components/icons/ShoppingIcon";
import StatisticsIcon from "../components/icons/StatisticsIcon";
import FilterIcon from "../components/icons/FilterIcon";
import ShoppingDoneIcon from "../components/icons/ShoppingDoneIcon";
import TotalPaymentIcon from "../components/icons/TotalPaymentIcon";
import FinancesToPaymentIcon from "../components/icons/FinancesToPaymentIcon";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      person: {
        component: PersonIcon
      },
      arrow: {
        component: ArrowIcon
      },
      envelope: {
        component: EnvelopeIcon
      },
      cart: {
        component: CartIcon
      },
      loupe: {
        component: LoupeIcon
      },
      settings: {
        component: SettingsIcon
      },
      logout: {
        component: LogoutIcon
      },
      home: {
        component: HomeIcon
      },
      finance: {
        component: FinanceIcon
      },
      report: {
        component: ReportIcon
      },
      shopping: {
        component: ShoppingIcon
      },
      statistics: {
        component: StatisticsIcon
      },
      filter: {
        component: FilterIcon
      },
      shoppingDone: {
        component: ShoppingDoneIcon
      },
      totalPayment: {
        component: TotalPaymentIcon
      },
      financesToPayment: {
        component: FinancesToPaymentIcon
      }
    }
  }
});
