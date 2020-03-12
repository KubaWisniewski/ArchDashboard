import authService from "../services/auth.service";
import router from "../router/index";

const initialState = {
  loggedIn: localStorage.getItem("loggedIn")
};
export const auth = {
  state: initialState,
  getters: {
    loggedIn: state => {
      return state.loggedIn;
    }
  },
  actions: {
    login({ commit }) {
      authService.login().then(response => {
        localStorage.setItem("loggedIn", response.loggedIn);
        commit("loginSuccess");
        router.push("/dashboard");
      });
    },
    logout({ commit }) {
      authService.logout().then(() => {
        localStorage.removeItem("loggedIn");
        commit("logoutSuccess");
        router.push("/");
      });
    }
  },
  mutations: {
    loginSuccess(state) {
      state.loggedIn = true;
    },
    logoutSuccess(state) {
      state.loggedIn = false;
    }
  }
};
