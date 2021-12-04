import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Messages from './Messages'
import Participant from './Participant'
import ChatBar from './ChatBar'
import connectToChat from '../helpers/connectToChat'
import ChatBubble from './ChatBubble'

function renderChatBubble(bubbleText, bubbleAuthor, bubbleDate) {
  return (
    <ChatBubble
      key={`bubble-${bubbleDate}`}
      bubbleText={bubbleText}
      bubbleDate={bubbleDate}
      bubbleAuthor={bubbleAuthor}
    />
  )
}

function ChatRoom(props) {
  const [chatMessagesSource, setChatMessagesSource] = useState(null)
  const [chatUsersSource, setChatUsersSource] = useState(null)

  useEffect(() => {
    setChatMessagesSource(new EventSource('http://localhost:8080/chat'))
    setChatUsersSource(new EventSource('http://localhost:8080/chat/users'))
  }, [])

  const [messagesData, setMessageData] = useState([])

  if (chatMessagesSource) {
    chatMessagesSource.onmessage = function handleMessageRecieved({ data }) {
      console.log('message data', data)
      const { text, time } = JSON.parse(data)
    }
  }

  const { state } = useLocation()
  async function sendMessageToServer(message) {
    // Axios to server
    try {
      const res = await axios.post(`http://localhost:8080/chat/newmsg`, {
        message,
        username: state,
      })
      if (!res) return // not supposed to
      console.log(res)
      console.log('Updated successfully')
    } catch (err) {
      console.log(err)
      return
    }
  }
  return (
    <div id="chat-room">
      <div className="mess-bar">
        {messagesData.map((messageData) =>
          renderChatBubble(messageData.text, 'guest', messageData.date)
        )}
        <Messages />
        <ChatBar onSentMessage={sendMessageToServer} />
      </div>
      {/* Map over participants and render:
           <Participant name="pName" />*/}
      <div className="participants">{/* connectedusers.map */}</div>
    </div>
  )
}

// useEffect(() => {
//   // connectToChat(), []
//   source.onopen = (event) => {
//     console.log('Welcome to the chat')
//   }
//   source.onmessage = function handleMessage(event) {
//     console.log(event.data)
//   }
//   // source.onmessage(function handleMessage(event) {
//   //   console.log(event)
//   //   console.log(event.data)
//   // })
// }, [])

export default ChatRoom
