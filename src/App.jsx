import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import About from "./pages/about"
import Product from "./pages/product"
import Contact from "./pages/contact"
import Guide from "./pages/blog/guide"
import ReturnPolicy from "./pages/blog/returnPolicy"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog/guide" element={<Guide />} />
            <Route path="/blog/return-policy" element={<ReturnPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  )
}
