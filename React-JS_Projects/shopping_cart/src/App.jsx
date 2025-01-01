import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Pages/Navbar"
import Home from "./components/Pages/Home"
import Cart from "./components/Pages/Cart"


function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App
