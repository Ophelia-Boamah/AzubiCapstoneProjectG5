import Axios from 'axios'

const api = Axios.create({
  baseURL: 'http: //13.89.50.97/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
