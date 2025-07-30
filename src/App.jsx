import { Route, Routes } from "react-router"
import HomePage from "./pages/homepage"
import RegisterPage from "./pages/registerpage"
import LoginPage from "./pages/loginPage"
import WalletPage from "./pages/walletpage"
import ArtistPage from "./pages/artistpage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" index element={<HomePage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/connect-wallet" element={<WalletPage/>} />
      <Route path='/artist-page' element={<ArtistPage/>} />
    </Routes>
    </>
  )
}

export default App
