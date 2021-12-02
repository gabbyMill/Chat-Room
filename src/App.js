import "./App.scss";
import LoginPage from "./components/LoginPage";
import handleSignInClick from "./helpers/handleSignInClick";
import ChatRoom from "./components/ChatRoom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LoginPage handleSignInClick={handleSignInClick} />}
        />
        <Route path="/room" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
