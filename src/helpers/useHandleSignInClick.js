import axios from 'axios'

// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = (status) => {
  return status < 500
}

export default async function useHandleSignInClick(username, navigate) {
  try {
    const res = await axios.get(`login/${username}`)
    if (res) {
      navigate('/chat', { replace: false, state: username }) // Later edit replace value to true
    }
    // const messagesData = await axios.get(./'allmessages')

    // Direct to chat-room path either here or in login page:

    return true
  } catch (err) {
    // Handle error
    // Axios error/ Access denied
    return
  }
}

// if (!res) {
//   return
//   // Access denied, you can display a nice red error message here
// }
