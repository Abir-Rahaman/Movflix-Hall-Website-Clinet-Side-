import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Contact from './Components/Pages/Contact/Contact';
import UpcomingCard from './Components/Pages/UpcomingCard/UpcomingCard';
import Horror from './Components/Pages/UpcomingCard/Horror';
import Action from './Components/Pages/UpcomingCard/Action';
import Comedy from "./Components/Pages/UpcomingCard/Comedy";
import Trending from './Components/Pages/Trending/Trending';
import Bollywood from './Components/Pages/Trending/Bollywood';
import Tamil from './Components/Pages/Trending/Tamil';
import Telegu from "./Components/Pages/Trending/Telegu";
import AllMovies from './Components/Pages/Trending/AllMovies';
import Footer from "./Components/Shared/Footer";
import Booking from './Components/Pages/Booking/Booking';
import BookingBnner from "./Components/Pages/Booking/BookingBnner";
import BookingTicket from "./Components/Pages/Booking/BookingTicket";


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<UpcomingCard></UpcomingCard>}>
          <Route path="horror" element={<Horror></Horror>} />
          <Route path="action" element={<Action></Action>} />
          <Route path="comedy" element={<Comedy></Comedy>} />
        </Route>
        <Route path="/" element={<Trending></Trending>}>
          <Route path="bollywood" element={<Bollywood></Bollywood>} />
          <Route path="tamil" element={<Tamil></Tamil>} />
          <Route path="telegu" element={<Telegu></Telegu>} />
          <Route path="allItem" element={<AllMovies></AllMovies>} />
        </Route>
        <Route path="/booking" element={<Booking></Booking>} /> 
        <Route path="/bookingCinema" element={<BookingBnner></BookingBnner>} /> 
        <Route path="/choose" element={<BookingTicket></BookingTicket>} /> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
