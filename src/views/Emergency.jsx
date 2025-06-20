const Emergency = () => {
  return (
    <div className="min-h-screen p-8 text-center bg-red-50">
      <h2 className="text-3xl font-bold text-red-700 mb-4">Emergency Help</h2>
      <p className="mb-6">If you're in crisis, please contact:</p>
      <ul className="mb-6 text-lg">
        <li>📞 112 - National Emergency</li>
        <li>📞 9152987821 - Mental Health Helpline</li>
      </ul>
      <button className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700">🚨 SOS</button>
    </div>
  );
};

export default Emergency;
