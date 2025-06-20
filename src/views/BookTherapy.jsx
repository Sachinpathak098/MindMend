const BookTherapy = () => {
  return (
    <div className="min-h-screen p-8 text-center bg-purple-50">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Book a Therapy Session</h2>
      <form className="max-w-md mx-auto text-left">
        <label className="block mb-2">Select Therapist</label>
        <select className="w-full mb-4 p-2 border rounded">
          <option>Dr. A</option>
          <option>Dr. B</option>
        </select>

        <label className="block mb-2">Choose Date</label>
        <input type="date" className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2">Purpose</label>
        <textarea className="w-full mb-4 p-2 border rounded" rows="3"></textarea>

        <button className="bg-purple-600 text-white px-4 py-2 rounded">Book Now</button>
      </form>
    </div>
  );
};

export default BookTherapy;
