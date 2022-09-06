import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Contact from './Components/Pages/Contact/Contact';
import UpcomingCard from './Components/Pages/UpcomingCard/UpcomingCard';
import Romantic from "./Components/Pages/UpcomingCard/Romantic";
import Horror from './Components/Pages/UpcomingCard/Horror';
import Action from './Components/Pages/UpcomingCard/Action';
import Comedy from "./Components/Pages/UpcomingCard/Comedy";


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<UpcomingCard></UpcomingCard>}>
          <Route path="romantic" element={<Romantic></Romantic>} />
          <Route path="horror" element={<Horror></Horror>} />
          <Route path="action" element={<Action></Action>} />
          <Route path="comedy" element={<Comedy></Comedy>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
