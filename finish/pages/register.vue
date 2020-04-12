<template>
  <section class="register">
    <form class="register__form">
      <div class="input__container">
        <label for="firstName" class="input__label">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          class="input__field"
          v-model="register.firstName"
        />
      </div>
      <div class="input__container">
        <label for="lastName" class="input__label">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          class="input__field"
          v-model="register.lastName"
        />
      </div>
      <div class="input__container">
        <label for="email" class="input__label">Email Address</label>
        <input type="email" name="email" id="email" class="input__field" v-model="register.email" />
      </div>
      <div class="input__container input__container--relative">
        <label for="password" class="input__label">Password</label>
        <input
          :type="visibility === true ? 'text' : 'password'"
          name="password"
          id="password"
          class="input__field"
          v-model="register.password"
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
      <input class="input__button" type="submit" value="Register" @click.prevent="registerUser" />
      <p class="loading__indicator" v-if="loading">Please wait....</p>
    </form>
  </section>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      loading: false,
      visibility: false,
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      this.loading = true;
      let data = this.register;
      try {
        await this.$axios.post("/user/create", data);
        this.$router.push("/login");
        this.loading = false;
        this.$notify({
          group: "success",
          title: "Success!",
          text: "Account created successfully"
        });
      } catch (error) {
        this.loading = false;
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
