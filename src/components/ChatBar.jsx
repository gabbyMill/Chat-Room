import { useRef } from "react";

export default function ChatBar({ onSentMessage }) {
  const input = useRef();

  return (
    <div className="chat-bar">
      <input
        onKeyDown={e => {
          if (e.key === "Enter") onSentMessage(input.current.value);
        }}
        ref={input}
        className="inp"
        placeholder="Write here..."
      ></input>
      <button
        onClick={() => onSentMessage(input.current.value)}
        className="send-btn"
      >
        Send
      </button>
    </div>
  );
}
