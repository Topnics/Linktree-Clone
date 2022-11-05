// import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>

    
  );
}

export default App;
