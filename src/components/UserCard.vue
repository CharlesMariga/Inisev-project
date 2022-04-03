<template>
  <div class="card">
    <img class="card__img" :src="user.image" />
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
};
</script>

<style lang="scss">
.card {
  height: 30rem;
  overflow: hidden;
  border-radius: 15px;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
