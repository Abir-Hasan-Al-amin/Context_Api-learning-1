import LogIn from './Components/LogIn'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
function App() {

  return (
    <UserContextProvider>
      <LogIn />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
