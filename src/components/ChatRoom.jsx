import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Messages from './Messages'
import Participant from './Participant'
import ChatBar from './ChatBar'
import connectToChat from '../helpers/connectToChat'

export default function ChatRoom(props) {
  useEffect(() => connectToChat(), [])

  const { state } = useLocation()
  const data = useLocation()
  console.log(data)

  async function sendMessageToServer(inputValue) {
    console.log(inputValue)
    // Axios to server
    try {
      const res = await axios.post('./newmsg', { inputValue })
      if (!res) return // not supposed to
      console.log(res.data)
      console.log('Updated successfully')
    } catch (err) {
      // do something brah
      console.log(err)
      return
    }
  }

  return (
    <div id="chat-room">
      <div className="mess-bar">
        <Messages />
        <ChatBar onSentMessage={sendMessageToServer} />
      </div>
      {/* Map over participants and render:
         <Participant name="pName" />*/}
      <div className="participants">
        <Participant name="Gabby  " />
        <Participant name="Ido" />
        <Participant name="Noa" />
        <Participant name="Dror" />
        <p>{state}</p>
      </div>
    </div>
  )
}
