import About from "./components/About/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";


import Nav from "./components/Navigation/Nav";

const App = () => {
  return <div>
    {/* <Navigation/> */}
    <Nav/>
    <Intro/>
    <About/>
    <ProductList/>
    
    <Contact/>
    
    </div>;
};

export default App;