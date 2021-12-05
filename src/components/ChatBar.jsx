import { useRef } from 'react'

export default function ChatBar({ sendMessageToServer }) {
  const input = useRef()

  return (
    <div className="chat-bar">
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') sendMessageToServer(input.current.value)
        }}
        ref={input}
        className="inp"
        placeholder="Write here..."
      ></input>
      <button
        onClick={() => sendMessageToServer(input.current.value)}
        className="send-btn"
      >
        Send
      </button>
    </div>
  )
}
