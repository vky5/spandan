import { Routes, Route, BrowserRouter } from "react-router-dom";
import EventPage from "./Pages/EventPage";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/HomePage";
import EventDetail from "./Pages/EventDetail";
import Footer from "./Components/Footer.jsx/Footer";
import Navbar from "./Components/Menu/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="px-3 py-5 md:px-28 bg-[#002046]">
        <Navbar />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/Events" element={<EventPage />}></Route>
          <Route path="/Events/:id" element={<EventDetail />}></Route>
          <Route path="/AboutUs" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
