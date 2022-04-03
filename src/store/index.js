import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const loggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    isLoggedIn: loggedIn,
    users: [],
  },
  mutations: {
    SET_CREDENTIALS(state, { username, password }) {
      state.username = username;
      state.password = password;
    },
    SET_LOGIN_STATE(state, status) {
      state.isLoggedIn = status;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    setLoginCredentials({ commit }, credentials) {
      commit("SET_CREDENTIALS", credentials);
    },
    login({ commit, state }, { username, password }) {
      if (username === state.username && password === state.password) {
        localStorage.setItem("isLoggedIn", "true");
        commit("SET_LOGIN_STATE", true);
        return true;
      }
      return false;
    },
    logout({ commit }) {
      localStorage.setItem("isLoggedIn", "false");
      commit("SET_LOGIN_STATE", false);
      return true;
    },
    getUsers({ commit }) {
      axios
        .get(
          "https://my-json-server.typicode.com/CharlesMariga/inisev-project/users"
        )
        .then((res) => commit("SET_USERS", res.data));
    },
  },
});
