<template>
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
        @click.prevent="emitEvent(incident)"
      >delete</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "incident-card",
  props: ["incidents"],
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    emitEvent(incident) {
      this.$emit("deleteIncident", incident);
    }
  }
};
</script>

<style>
</style>