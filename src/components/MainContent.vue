<template>
  <main class="main-content">
    <div class="side-nav-opener" @click="showSideNav">
      <span class="material-icons">menu</span>
    </div>
    <Modal />
    <div class="main-content__container">
      <div class="main-content__heading-container">
        <h2 class="main-content__heading">Users</h2>
      </div>
      <div class="main-content__grid">
        <UserCard v-for="user in users" :key="user.index" :user="user" />
      </div>
    </div>
  </main>
</template>

<script>
import UserCard from "./UserCard.vue";
import Modal from "./Modal.vue";
import { mapState } from "vuex";

export default {
  name: "MainContent",
  components: {
    UserCard,
    Modal,
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    showSideNav() {
      this.$store.dispatch("openSideNav");
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style lang="scss">
.main-content {
  position: relative;
  height: 100vh;
  overflow: hidden;

  &__container {
    overflow-y: auto;
  }

  &__heading-container {
    display: flex;
    justify-content: flex-end;
  }

  &__heading {
    font-size: 4.5rem;
    text-align: right;
    margin: 3.2rem 5rem;
    position: relative;
    padding: 1rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10px;
      background-color: var(--text-color);
      border-radius: 100px;
    }
  }

  &__grid {
    padding: 5rem 10rem 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 25rem));
    gap: 10rem;
  }
}

.side-nav-opener {
  position: absolute;
  top: 2rem;
  left: 2rem;
  cursor: pointer;

  @media screen and (min-width: 320px) {
    display: none;
  }
}
</style>
