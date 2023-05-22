import About from "./components/About/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";

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