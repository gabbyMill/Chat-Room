import { useLocation } from "react-router-dom";
import Messages from "./Messages";
import Participant from "./Participant";
import ChatBar from "./ChatBar";

export default function ChatRoom(props) {
  const { state } = useLocation();
  const data = useLocation();
  console.log(data);
  return (
    <div id="chat-room">
      <div className="mess-bar">
        <Messages />
        <ChatBar />
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
  );
}
