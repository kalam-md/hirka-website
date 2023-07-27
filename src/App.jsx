import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import About from "./pages/about"
import ProductTafiaro from "./pages/product"
import ProductRenjana from "./pages/productRenjana"
import ProductJokka from "./pages/productJokka.jsx"
import ProductAstakona from "./pages/productAstakona"
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
            <Route path="/product" element={<ProductTafiaro />} />
            <Route path="/product/renjana" element={<ProductRenjana />} />
            <Route path="/product/jokka" element={<ProductJokka />} />
            <Route path="/product/astakona" element={<ProductAstakona/>} />
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
