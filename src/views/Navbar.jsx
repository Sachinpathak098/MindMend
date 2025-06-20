import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white">
      <h1 className="text-2xl font-bold text-purple-700">MindMend</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-purple-700">Home</Link>
        <Link to="/about" className="hover:text-purple-700">About</Link>
        <Link to="/services" className="hover:text-purple-700">Services</Link>
        <Link to="/contact" className="hover:text-purple-700">Contact</Link>
        <Link to="/login" className="ml-4">Login</Link>
        <Link to="/signup" className="ml-4">Signup</Link>
        <Link to="/mood">Mood</Link>
        <Link to="/book">Book</Link>
        <Link to="/selfhelp">Self Help</Link>
        <Link to="/emergency">Help</Link>
        <Link to="/forum">Forum</Link>


      </div>
    </nav>
  );
};

export default Navbar;
