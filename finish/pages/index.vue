<template>
  <section class="home">
    <h1 class="home__heading">Welcome to your Report App!</h1>
    <div class="incidents__container">
      <div class="incident" v-for="incident in incidents" :key="incident.id">
        <div class="image">
          <img src="../assets/Images/placeholder.png" class="incident__image" :alt="incident.title" />
        </div>
        <p>
          <span class="paragraph__title">Title</span>
          : {{ incident.title }}
        </p>
        <p>
          <span class="paragraph__title">Type</span>
          : {{ incident.type }}
        </p>
        <p>
          <span class="paragraph__title">Date</span>
          : {{ new Date(Number(incident.createdOn)).toString() }}
        </p>
        <p>
          <span class="paragraph__title">Location</span>
          : {{ incident.location }}
        </p>
        <p>
          <span class="paragraph__title">Comment</span>
          : {{ incident.comment !== 'undefined' ? incident.comment : 'n/a' }}
        </p>
        <button
          class="incident__button"
          v-if="auth.loggedIn && auth.user.id === incident.createdBy"
          @click.prevent="deleteIncident(incident)"
        >delete</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "landing-page",
  data() {
    return {
      incidents: ""
    };
  },
  async asyncData({ $axios }) {
    let { data } = await $axios.get("/incidents");

    return { incidents: data.data.incidents };
    // return $axios.get("/incidents")
    // .then(resp => {
    //   return { incidents: resp.data.data.incidents };
    // });
  },
  computed: {
    ...mapState(["auth"])
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
