import Footer from "./Components/EventComponents/Footer.jsx/Footer";
import Menu from "./Components/EventComponents/Menu/Menu";
import Navbar from "./Components/EventComponents/Menu/Navbar";
import EventPage from "./pages/EventPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="px-3 md:px-28 bg-[#002046]">
      <Navbar />
      <EventPage />
      {/* <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Events" element={<Events/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
