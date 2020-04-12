<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>

    <nav class="nav">
      <div class="nav__user">
        <button class="nav__link nav__link--long">
          <nuxt-link to="/report-incident">Report incident</nuxt-link>
        </button>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/my-reports">My Reports</nuxt-link>
        </button>
        <button class="nav__link">Log out</button>
      </div>
      <button class="nav__link">
        <nuxt-link to="/login">Login</nuxt-link>
      </button>
      <button class="nav__link">
        <nuxt-link to="/register">Register</nuxt-link>
      </button>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "nav-bar",
  data() {
    return {};
  },
  methods: {},
  components: {
    Logo
  }
};
</script>

<style></style>
