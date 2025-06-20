import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loneTree from "../assets/lone-tree.jpg"; // ✅ image import

const Home = () => {
  const navigate = useNavigate(); // ✅ for routing

  return (
    <section
      className="min-h-screen relative flex flex-col justify-center items-center px-4 py-20 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${loneTree})`, // ✅ background image
      }}
    >
      {/* Optional dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Nurturing Mental Wellness <br className="hidden md:inline" /> Through Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          Empower your mind with tools, guidance, and a caring community.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")} // ✅ navigate to Contact
          className="mt-8 bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
