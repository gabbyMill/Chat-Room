import { useLocation } from "react-router-dom";

export default function ChatRoom(props) {
  const { state } = useLocation();
  const data = useLocation();
  console.log(data);
  return (
    <>
      <div>
        <p>{state}</p>
      </div>
    </>
  );
}
