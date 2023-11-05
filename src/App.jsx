
import Footer from "./Components/EventComponents/Footer.jsx/Footer";
import Navbar from "./Components/EventComponents/Menu/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EventPage from "./Pages/EventPage";
import AboutPage from "./Pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <div className="px-3 md:px-28 bg-[#002046]">
        <Navbar />

        <Routes>
          <Route index element={<EventPage />}></Route>
          {/* <Route path="/Events" element={<EventPage />}></Route> */}
          <Route path="/AboutUs" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
