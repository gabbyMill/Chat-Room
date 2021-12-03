import './scss/LoginPage.scss'
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage(props) {
  const inputEl = useRef()
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <p>Welcome! Please enter your nickname</p>
      <input
        ref={inputEl}
        type="text"
        placeholder="nickname"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate('/room', { replace: false, state: inputEl.current.value }) // Later edit replace value to true
          }
        }}
      />
      <button
        onClick={async () => {
          await props.handleSignInClick(inputEl.current.value)
          // Navigate to chatroom
          navigate('/room', { replace: false, state: inputEl.current.value }) // Later edit replace value to true
        }}
      >
        sign in
      </button>
    </div>
  )
}
export default LoginPage
