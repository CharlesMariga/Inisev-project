<template>
  <div class="side-nav">
    <h1 class="logo">Logo Ipsum</h1>
    <ul class="menu">
      <li class="menu__item" v-for="item in 3" :key="item">Menu Item</li>
    </ul>
    <div class="logout">
      <span @click="logout" class="material-icons" title="Logout">logout</span>
      Admin
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  methods: {
    logout() {
      this.$store.dispatch("logout").then((res) => {
        if (res) this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>

<style lang="scss">
.side-nav {
  padding: 2.4rem 3.2rem;
  height: 100%;
  position: relative;
}

.logo {
  font-size: 3rem;
  margin-bottom: 6rem;
}

.menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  &__item {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    border-top: 3px solid var(--text-color);
    border-bottom: 3px solid var(--text-color);
    padding: 2rem;
  }
}

.logout {
  margin-top: auto;
  position: absolute;
  bottom: 3.2rem;
  left: 2.4rem;
  font-size: 2rem;
  display: flex;
  align-items: center;

  span {
    transform: rotatez(180deg);
    margin-right: 2rem;
    cursor: pointer;
  }
}
</style>
