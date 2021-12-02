import './App.scss'
import LoginPage from './components/LoginPage'

function App() {
  function handleSignInClick(inputComponentRef) {
    console.log(inputComponentRef.value)
  }

  return (
    <div className="App">
      <LoginPage handleSignInClick={handleSignInClick} />
    </div>
  )
}

export default App
