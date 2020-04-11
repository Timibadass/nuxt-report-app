<template>
  <section class="incidents">
    <h1 class="home__heading">My Reports</h1>
    <incident-card :incidents="incidents" @deleteIncident="deleteIncident"></incident-card>
  </section>
</template>

<script>
import incidentCard from "@/components/incidentCard.vue";
export default {
  name: "my-reports",
  middleware: "auth",
  data() {
    return {
      incidents: []
    };
  },
  components: {
    incidentCard
  },
  async fetch() {
    let { data } = await this.$axios.get("/user/incidents");
    this.incidents = data.data;
  },
  methods: {
    async getMyReports() {
      try {
        let res = await this.$store.dispatch("getMyReports");
        this.incidents = res.data.data;
      } catch (error) {
        if (error.response.data.data === "User yet to report an incident") {
          this.incidents = [];
        }
      }
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
          text: "Report successfully deleted!"
        });
        this.getMyReports();
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

<style>
</style>