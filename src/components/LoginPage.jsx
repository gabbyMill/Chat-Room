import './scss/LoginPage.scss'
import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage(props) {
  const inputEl = useRef()
  const navigate = useNavigate()

  function addToList(participantsList) {
    console.log(props.participants)
  }

  return (
    <div className="login-page">
      <p>Welcome! Please enter your nickname</p>
      <input
        ref={inputEl}
        type="text"
        placeholder="nickname"
        onKeyDown={async (e) => {
          if (e.key === 'Enter') {
            const userToken = await props.useHandleSignInClick(
              inputEl.current.value,
              navigate
            )
            // addToList(participantsList)
            // props;
            // navigate('/chat', { replace: false, state: inputEl.current.value }) // Later edit replace value to true
          }
        }}
      />
      <button
        onClick={async () => {
          const participantsList = await props.useHandleSignInClick(
            inputEl.current.value,
            navigate
          )
        }}
      >
        sign in
      </button>
    </div>
  )
}
export default LoginPage
