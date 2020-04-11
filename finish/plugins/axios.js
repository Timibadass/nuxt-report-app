export default function ({
  $axios,
  redirect,
  store,
  $auth
}) {

  let token = $auth.user.token

  // axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT

  if (store.getters.isLoggedIn) {
    $axios.setToken(`${token}`)
    $axios.setHeader('Authorization', `${token}`)
    $axios.defaults.headers.common['Authorization'] = `${token}`
  }

  $axios.onError(error => {
    if (error.response && error.response.status === 500) {
      redirect('/login')
    }
  })

  $axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        if (response.request.responseURL && response.request.responseURL.includes('login')) {
          store.dispatch("setUser", response);
        }
      }
      return response
    }
  )

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.dispatch('logout');
      localStorage.removeItem("last_url");

      localStorage.setItem('last_url', window.location.pathname)
      window.location = "/login";
    }
  })
}
