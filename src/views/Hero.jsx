import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center items-center text-center px-4 pb-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">
        Nurturing Mental Wellness Through Technology
      </h1>
      <p className="text-gray-700 mb-6 text-lg max-w-xl">
        Empower your mind with tools, guidance, and a caring community.
      </p>
      <Link to="/about">
        <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
