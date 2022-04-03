<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("setLoginCredentials", {
      username: "admin",
      password: "1234",
    });
  },
};
</script>

<style lang="scss">
:root {
  --primary-color: #4f46e5;
  --text-color: #2c3e50;
}

#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media screen and (max-width: 320px) {
    font-size: 50%;
  }
}
</style>
