import { Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

function App() {

  return (
    <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path={"/login"} element={<LoginPage/>}/>
      <Route path={"/signup"} element={<SignUpPage/>}/>
    </Routes>
  )
}

export default App
