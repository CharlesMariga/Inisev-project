<template>
  <div class="side-nav" :class="sideNavOpen ? 'side-nav--open' : ''">
    <div class="side-nav-close" @click="hideSideNav">
      <span class="material-icons">keyboard_double_arrow_left</span>
    </div>
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
import { mapState } from "vuex";

export default {
  name: "SideNav",
  computed: {
    ...mapState(["sideNavOpen"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then((res) => {
        if (res) this.$router.push({ name: "Login" });
      });
    },
    hideSideNav() {
      this.$store.dispatch("closeSideNav");
    },
  },
};
</script>

<style lang="scss">
.side-nav {
  padding: 2.4rem 3.2rem;
  height: 100%;
  position: relative;
  background-color: white;

  @media screen and (max-width: 320px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    transform: translateX(-100%);
    transition: all 250ms ease-in-out;

    &--open {
      transform: translateX(0);
    }
  }
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

.side-nav-close {
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;

  @media screen and (min-width: 320px) {
    display: none;
  }
}
</style>
