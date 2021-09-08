import axios from 'axios'

const apiClient = axios.create({
  baseURL: ' http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  // Aqui van mis servicios
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  createEvent() {
    let newEvent = {}
    return apiClient.post('/events/', { event: newEvent })
  },
}
