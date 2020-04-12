<template>
  <section class="incidents">
    <h1 class="home__heading">My Reports</h1>
    <incident-card :incidents="incidents"></incident-card>
  </section>
</template>

<script>
import incidentCard from "@/components/incidentCard.vue";
export default {
  name: "my-reports",
  data() {
    return {
      incidents: []
    };
  },
  components: {
    incidentCard
  },
  methods: {}
};
</script>

<style>
</style>