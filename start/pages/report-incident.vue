<template>
  <section class="report">
    <h1 class="report__heading">Report an Incident</h1>
    <form class="report__form">
      <div class="input__container">
        <label for="title" class="input__label">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="incident.title"
          class="input__field"
          required
        />
      </div>
      <div class="input__container">
        <label for="location" class="input__label">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          v-model="incident.location"
          required
          class="input__field"
        />
      </div>
      <div class="input__container">
        <label for="comment" class="input__label">Comment</label>
        <textarea
          name="comment"
          id="comment"
          v-model="incident.comment"
          class="input__area"
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <input type="submit" value="Report" class="input__button" @click.prevent="reportIncident" />
      <p class="loading__indicator" v-if="loading">Please wait....</p>
    </form>
  </section>
</template>

<script>
export default {
  name: "report-incident",
  data() {
    return {
      loading: false,
      incident: {
        type: "red-flag",
        title: "",
        location: "",
        comment: ""
      }
    };
  },
  methods: {
    async reportIncident() {}
  }
};
</script>

<style>
</style>