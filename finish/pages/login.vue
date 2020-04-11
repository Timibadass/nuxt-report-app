<template>
  <section class="login">
    <form class="login__form" @submit.prevent="logIn">
      <div class="input__container">
        <label for="email" class="input__label">Email Address</label>
        <input type="email" name="email" id="email" class="input__field" v-model="login.email" />
      </div>
      <div class="input__container input__container--relative">
        <label for="password" class="input__label">Password</label>
        <input
          :type="visibility === true ? 'text' : 'password'"
          name="password"
          id="password"
          class="input__field"
          v-model="login.password"
        />
        <button class="visibility__button">
          <font-awesome-icon
            v-if="visibility"
            @click.prevent="visibility = false"
            :icon="['far', 'eye-slash']"
          />
          <font-awesome-icon @click.prevent="visibility = true" v-else :icon="['far', 'eye']" />
        </button>
      </div>
      <input class="input__button" type="submit" value="login" @click.prevent="logIn" />
      <p class="loading__indicator" v-if="loading">Please wait....</p>
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loading: false,
      visibility: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async logIn() {
      let data = this.login;
      this.loading = true;
      this.$nuxt.$loading.start();
      try {
        let res = await this.$auth.loginWith("local", {
          data
        });
        this.loading = false;
        this.$nuxt.$loading.finish();
        let user = res.data.data.user;
        this.$auth.setUser(user);
        this.$notify({
          group: "success",
          title: "Success!",
          text: "Welcome!"
        });
      } catch (error) {
        this.loading = false;
        this.$nuxt.$loading.finish();
        this.$notify({
          group: "error",
          title: "Error!",
          text: error.response
            ? error.response.data.error
            : "Sorry an error occured, check your internet"
        });
      }
    }
  }
};
</script>

<style></style>
