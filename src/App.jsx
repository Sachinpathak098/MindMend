import { Routes, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Signup from "./views/Signup";   // 👈 Add this
import Login from "./views/Login";  
import MoodTracker from "./views/MoodTracker";
import BookTherapy from "./views/BookTherapy";
import SelfHelp from "./views/SelfHelp";
import Emergency from "./views/Emergency";
import Forum from "./views/Forum";   // 👈 Add this

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />    {/* ✅ Add this */}
        <Route path="/login" element={<Login />} />      {/* ✅ Add this */}
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/book" element={<BookTherapy />} />
        <Route path="/selfhelp" element={<SelfHelp />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
 