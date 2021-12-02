import "./App.scss";
import LoginPage from "./components/LoginPage";
import handleSignInClick from "./helpers/handleSignInClick";

function App() {
  return (
    <div className="App">
      <LoginPage handleSignInClick={handleSignInClick} />
    </div>
  );
}

export default App;
