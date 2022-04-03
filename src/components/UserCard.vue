<template>
  <div class="card">
    <img class="card__img" :src="user.image" />
    <div class="card__overlay" @click="openUserModal">
      <span class="material-icons-outlined card__icon">email</span>
      <div class="card__overlay-content">
        <h3>{{ user.name }}</h3>
        <p>{{ user.address.city }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    openUserModal() {
      this.$store.dispatch("openUserModal", this.user);
    },
  },
};
</script>

<style lang="scss">
.card {
  height: 30rem;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  position: relative;

  &:hover {
    .card__overlay {
      transform: translateY(0);
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;

    transform: translateY(100%);
    transition: all 250ms ease-in-out;
  }

  &__icon {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  &__overlay-content {
    font-size: 1.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
