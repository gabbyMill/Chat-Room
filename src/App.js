import './App.scss'
import LoginPage from './components/LoginPage'
import useHandleSignInClick from './helpers/useHandleSignInClick'
import ChatRoom from './components/ChatRoom'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LoginPage useHandleSignInClick={useHandleSignInClick} />}
        />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </div>
  )
}

export default App
