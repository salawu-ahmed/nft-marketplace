import { Route, Routes } from "react-router"
import HomePage from "./pages/homepage"
import RegisterPage from "./pages/registerpage"
import LoginPage from "./pages/loginPage"
import WalletPage from "./pages/walletpage"
import ArtistPage from "./pages/artistpage"
import AboutNFT from "./pages/about-nft"
import Marketplace from "./pages/marketplace"
import Layout from "./pages/layout"


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/connect-wallet" element={<WalletPage />} />
          <Route path='/artist-page' element={<ArtistPage />} />
          <Route path="/about-nft" element={<AboutNFT />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
