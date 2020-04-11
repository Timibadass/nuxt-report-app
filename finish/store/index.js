export const state = () => ({})

export const getters = {

}

export const mutations = {}

export const actions = {
  async getIncidents() {
    let res = this.$axios.get('/incidents')
    return res;
  },
  async deleteIncident({}, data) {
    let res = await this.$axios.delete("/incident/delete", {
      data
    })
    return res;
  },
  async reportIncident({}, data) {
    let res = await this.$axios.post('/incident/create', data)
    return res;
  },
  logOut() {
    this.$auth.logout();
  }
}
