import { useRef } from 'react'

export default function ChatBar(props) {
  const input = useRef()

  return (
    <div className="chat-bar">
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter')
            props.sendMessageToServer(input.current.value, 'itzik')
        }}
        ref={input}
        className="inp"
        placeholder="Write here..."
      ></input>
      <button
        onClick={() => props.sendMessageToServer(input.current.value, 'itzik')}
        className="send-btn"
      >
        Send
      </button>
    </div>
  )
}
