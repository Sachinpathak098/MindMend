const Services = () => {
  return (
    <div className="py-10 px-4 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Therapy Sessions</h3>
          <p className="text-gray-600">Online sessions with certified mental health professionals.</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Self-Help Tools</h3>
          <p className="text-gray-600">Meditation, journaling, and habit-tracking resources.</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Community Forums</h3>
          <p className="text-gray-600">Engage with others in a safe and supportive space.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
