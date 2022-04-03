<template>
  <div
    class="modal"
    :class="userModalOpen ? 'modal--open' : ''"
    @click="closeModal($event)"
  >
    <div
      class="modal__content"
      :class="userModalOpen ? 'modal__content--open' : ''"
    >
      <span class="material-icons modal__close-icon" @click="closeModal($event)"
        >close</span
      >
      <div class="modal__img-container">
        <img class="modal__img" :src="modalContent.image" />
      </div>
      <div class="modal__details">
        <ul class="contacts">
          <li class="contacts__item">
            <span class="material-icons-round">person</span
            >{{ modalContent.name }}
          </li>
          <li class="contacts__item">
            <span class="material-icons">email</span>
            <a :href="`mailto:${modalContent.email}`">{{
              modalContent.email
            }}</a>
          </li>
          <li class="contacts__item">
            <span class="material-icons">local_phone</span
            >{{ modalContent.phone }}
          </li>
          <li class="contacts__item">
            <span class="material-icons">location_on</span
            >{{ modalContent.address ? modalContent.address.city : "" }}
          </li>
          <li class="contacts__item">
            <span class="material-icons">link</span>{{ modalContent.website }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Modal",
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    closeModal(e) {
      console.log(e.target);
      if (
        e.target.classlist.contains("modal") ||
        e.target.classlist.contains("modal__close-icon")
      )
        this.$store.dispatch("closeUserModal");
    },
  },
  computed: {
    ...mapState(["modalContent", "userModalOpen"]),
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: all 0.5s ease-in-out;

  &--open {
    opacity: 1 !important;
    visibility: visible !important;
    display: flex !important;
  }

  &__close-icon {
    position: absolute;
    right: 3rem;
    top: 3rem;
    width: 4rem;
    cursor: pointer;
  }

  &__content {
    max-width: 1000px;
    background-color: white;
    overflow: hidden;
    display: grid;
    grid-template-columns: 30% 1fr;
    border-radius: 10px;
    position: relative;

    transform: scale(0.5);
    transition: all 2s ease-in-out;

    &--open {
      transform: scale(1);
    }
  }

  &__img-container {
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &__details {
    padding: 3rem;
    display: flex;
    align-items: center;
  }
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__item {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 3rem;

    a {
      text-decoration: none;
      &:link,
      &:visited {
        color: inherit;
      }
    }
  }
}
</style>
