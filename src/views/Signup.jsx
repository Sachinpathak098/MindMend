// views/Signup.jsx
const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
          <select className="w-full mb-4 p-2 border rounded">
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="therapist">Therapist</option>
          </select>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
