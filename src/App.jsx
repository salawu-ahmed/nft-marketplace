import { Route, Routes } from "react-router"
import HomePage from "./pages/homepage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" index element={<HomePage/>} />
    </Routes>
    </>
  )
}

export default App
