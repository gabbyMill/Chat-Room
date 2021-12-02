import "./scss/LoginPage.scss";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const inputEl = useRef();
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <p>Welcome! Please enter your nickname</p>
      <input ref={inputEl} type="text" placeholder="nickname" />
      <button
        onClick={async () => {
          await props.handleSignInClick(inputEl.current);
          // Navigate to chatroom
          console.log(inputEl.current);
          navigate("/room", { replace: true, state: "data" });
        }}
      >
        sign in
      </button>
    </div>
  );
}
export default LoginPage;
