
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Signup from './routes/Signup';

function App() {
  return (
    <>
    <Router> 
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/> 
      </Routes>
    </Router>
    </>

  );
}

export default App;
