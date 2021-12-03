import axios from 'axios'
// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = (status) => {
  return status < 500
}

export default async function connectToChat() {
  const res = await axios.get('chat')
  console.log(res)
}
