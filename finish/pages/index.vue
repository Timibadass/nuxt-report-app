<template>
  <section class="home">
    <h1 class="home__heading">Welcome to your Report App!</h1>
    <incident-card :incidents="incidents" @deleteIncident="deleteIncident"></incident-card>
  </section>
</template>

<script>
import incidentCard from "@/components/incidentCard.vue";
export default {
  name: "landing-page",
  data() {
    return {
      incidents: []
    };
  },
  components: {
    incidentCard
  },
  async asyncData({ $axios }) {
    let { data } = await $axios.get("/incidents");
    return { incidents: data.data.incidents };
  },
  methods: {
    async getIncidents() {
      let res = await this.$store.dispatch("getIncidents");
      this.incidents = res.data.data.incidents;
    },
    async deleteIncident(incident) {
      let data = {
        id: incident.id,
        type: incident.type
      };
      try {
        await this.$store.dispatch("deleteIncident", data);
        this.$notify({
          group: "success",
          title: "Success",
          text: "Incident successfully deleted!"
        });
        this.getIncidents();
      } catch (error) {
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
