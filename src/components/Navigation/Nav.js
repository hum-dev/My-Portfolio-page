import Navigation from "./Navigation";
import About from "../About/about";
import Intro from "../intro/intro";
import Product from "../Product/Product";
import Contact from "../Contact/Contact";
import {Route, Routes} from "react-router-dom"


function Nav () {
   
return (<>
    <Navigation/>
    <Routes>
      <Route path ="/About" element={<About/>} />
      <Route path ="/Intro" element={<Intro/>} />
      <Route path ="/Product" element={<Product/>} />
      <Route path ="/Contact" element={<Contact/>} />
    </Routes>
    </>
    ) 
}
export default Nav