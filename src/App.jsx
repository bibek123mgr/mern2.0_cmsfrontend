import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Addbook from "./pages/Addbook"
import Singlebook from "./pages/Singlebook"
import Editbook from "./pages/Editbook"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path="/addbook" element={<Addbook />} />
          <Route exact path="/books/:id" element={<Singlebook />} />
          <Route exact path="/editbook/:id" element={<Editbook />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
