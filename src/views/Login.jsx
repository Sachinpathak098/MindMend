import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/login", form);
    if (res.data.role === "therapist") navigate("/therapist");
    else navigate("/patient");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center text-purple-600">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
