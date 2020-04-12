<template>
  <div>
    <div class="incidents__container" v-if="incidents.length > 0">
      <div class="incident" v-for="incident in incidents" :key="incident.id">
        <div class="image">
          <img
            src="../assets/Images/placeholder.png"
            class="incident__image"
            :alt="incident.title"
          />
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
          : {{ incident.comment !== "undefined" ? incident.comment : "n/a" }}
        </p>
      </div>
    </div>
    <div class="incidents__container" v-else>
      <div class="empty__report">
        <h5>You have no reports yet</h5>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/report-incident">Report incident</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "incident-card",
  props: {
    incidents: Array
  },
  methods: {
    emitEvent(incident) {
      this.$emit("deleteIncident", incident);
    }
  }
};
</script>

<style></style>
