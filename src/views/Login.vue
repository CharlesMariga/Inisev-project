<template>
  <div class="login">
    <div class="login__container">
      <h1 class="login__heading">Sign in into your account</h1>
      <form class="login__form" @submit="login($event)" method="POST">
        <input
          class="login__input"
          name="username"
          type="text"
          placeholder="johnthedesigner@gmail.com"
          v-model="username"
        />
        <input
          class="login__input"
          name="password"
          type="password"
          placeholder="**********"
          v-model="password"
        />
        <div class="checkbox-group">
          <input
            class="login__input"
            type="checkbox"
            name="checkbox"
            :value="true"
          />
          <p>Keep me signed in</p>
        </div>
        <input class="login__submit" type="submit" value="Sign in" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res) {
            // Go the user's login page
            this.$router.push({ name: "Users" });
          } else {
            // Show an error message
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
  }

  &__heading {
    font-size: 3rem;
    text-transform: uppercase;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__input {
    padding: 2rem 2.8rem;
    border: 2px solid transparent;
    font-size: 1.6rem;
    background-color: rgb(230, 230, 230);
    border-radius: 4px;
    overflow: hidden;
    outline: none;
    transition: all 250ms ease-in;

    &:focus {
      border: 2px solid var(--primary-color);
    }
  }

  &__submit {
    padding: 2rem 2.8rem;
    text-align: center;
    text-transform: uppercase;
    border: none;
    background-color: var(--primary-color);
    color: white;
    border-radius: 4px;
    font-size: 1.8rem;
    transition: all 250ms ease-in;

    &:hover {
      background-color: darken($color: #4f46e5, $amount: 20%);
    }
  }
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
  }
}
</style>
