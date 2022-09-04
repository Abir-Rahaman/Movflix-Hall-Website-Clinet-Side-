import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Contact from './Components/Pages/Contact/Contact';
import Banner from './Components/Pages/Banner/Banner';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
