<template>
  <div v-if="show" class="alert">
    <p class="alert__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    text: {
      type: String,
    },
    show: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.alert {
  position: absolute;
  background-color: rgb(255, 0, 0);
  border-radius: 10px;
  top: 3rem;
  margin: 0 3rem;

  &__text {
    text-align: center;
    color: white;
    font-size: 1.8rem;
    padding: 1.4rem 2.4rem;
  }
}
</style>
