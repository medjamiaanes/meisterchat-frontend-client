import axios from 'axios'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem('meisterchat_auth')
      window.location.replace('/login')
    }
    return Promise.reject(error)
  },
)

export const setAuthorization = (accessToken) => {
  axios.defaults.headers.common['authorization'] = accessToken
}

export default axios
