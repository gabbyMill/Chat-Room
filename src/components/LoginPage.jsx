import "./scss/LoginPage.scss";
import { useRef } from "react";

function LoginPage(props) {
  const inputEl = useRef();

  return (
    <div className="login-page">
      <p>Welcome! Please enter your nickname</p>
      <input ref={inputEl} type="text" placeholder="nickname" />
      <button onClick={() => props.handleSignInClick(inputEl.current)}>
        sign in
      </button>
    </div>
  );
}
export default LoginPage;
