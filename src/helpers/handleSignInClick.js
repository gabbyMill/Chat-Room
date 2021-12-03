import axios from 'axios'
axios.defaults.validateStatus = () => {}

export default async function handleSignInClick(inputComponentRef) {
  console.log(inputComponentRef.value)
  try {
    const res = await axios.get(`./${inputComponentRef}`)

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
