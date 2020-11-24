import axios from 'axios'

const instance =axios.create({baseURL:'http://localhost:60123/'})
export default instance