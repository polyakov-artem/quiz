import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-b6c1f.firebaseio.com/'
})