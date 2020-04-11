<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>

    <nav class="nav">
      <div class="nav__user" v-if="auth.loggedIn">
        <p>{{ auth.user.email }}</p>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/report-incident">Report incident</nuxt-link>
        </button>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/my-reports">My Reports</nuxt-link>
        </button>
        <button class="nav__link" @click.prevent="logOut">Log out</button>
      </div>
      <button class="nav__link" v-if="!auth.loggedIn">
        <nuxt-link to="/login">Login</nuxt-link>
      </button>
      <button class="nav__link" v-if="!auth.loggedIn">
        <nuxt-link to="/register">Register</nuxt-link>
      </button>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
import Logo from "@/components/Logo";
export default {
  name: "nav-bar",
  data() {
    return {};
  },
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push("/login");
    }
  },
  components: {
    Logo
  }
};
</script>

<style></style>
