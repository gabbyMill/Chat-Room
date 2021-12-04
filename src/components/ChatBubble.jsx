function ChatBubble(props) {
  return (
    <div className="chat-bubble-container">
      <div className="chat-bubble">
        <p> {props.bubbleAuthor} : </p>
        <p>{props.bubbleText} </p>
      </div>
      <p>{props.bubbleDate}</p>
    </div>
  )
}

export default ChatBubble
