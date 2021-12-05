import "./scss/LoginPage.scss";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useHandleSignInClick from "../helpers/useHandleSignInClick";

function LoginPage(props) {
  const inputEl = useRef();
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <p>Welcome! Please enter your nickname</p>
      <input
        ref={inputEl}
        type="text"
        placeholder="nickname"
        onKeyDown={async e => {
          if (e.key === "Enter") {
            // async

            const token = await props.useHandleSignInClick(
              inputEl.current.value,
              navigate
            );
            localStorage.setItem("token", token);
          }
        }}
      />
      <button
        onClick={async () => {
          // async await
          const token = await props.useHandleSignInClick(
            inputEl.current.value,
            navigate
          );
          //  const userToken =
          localStorage.setItem("token", token);
        }}
      >
        sign in
      </button>
    </div>
  );
}
export default LoginPage;
