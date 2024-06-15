
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/layout/pages/Home';
import About from './Components/layout/pages/About';
import Contact from './Components/layout/pages/Contact';
import Navbar from './Components/layout/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        

        



      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
