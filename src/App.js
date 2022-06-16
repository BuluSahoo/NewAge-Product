import './App.css';
import Boxes from './Components/Column-Boxes/Boxes';
import Form from './Components/Form/Form';
import Hero1 from "./Components/Hero-Section/Hero1"
import Hero2 from './Components/Hero-Section/Hero2';
import LeftRight from './Components/Left-Right-Img/LeftRight';
import Products from './Components/Prodct-section/Products';


function App() {
  return (
    <div className='App'>
      <Hero1/>
      <Hero2/>
      <Products/>
      <Boxes/>
      <LeftRight/>
      <Form/>
    </div>
  );
}

export default App;
