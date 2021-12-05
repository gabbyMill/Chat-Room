import "./App.scss";
import LoginPage from "./components/LoginPage";
import useHandleSignInClick from "./helpers/useHandleSignInClick";
import ChatRoom from "./components/ChatRoom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [connectedParticipants, setConnectedParticipants] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              useHandleSignInClick={useHandleSignInClick}
              connectedParticipants={connectedParticipants}
              setConnectedParticipants={setConnectedParticipants}
            />
          }
        />
        <Route
          path="/chat"
          element={
            <ChatRoom
              users={[connectedParticipants, setConnectedParticipants]}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
