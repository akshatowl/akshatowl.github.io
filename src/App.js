import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Projects from "./Component/Projects"
import Home from "./Component/Home"

import {Route, Routes} from "react-router-dom"

function App(){
  return(
  <>
    <Navbar/>
    <br/>
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  )
  
}
export default App