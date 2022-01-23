import axios from 'axios'

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/KP1YaFHIrRhdeL6c5o5wngkYYqwZPt8s',
})

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then((response) => response.data)
  },
}

export default api
