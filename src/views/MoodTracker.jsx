const MoodTracker = () => {
  return (
    <div className="min-h-screen p-8 text-center bg-purple-50">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Mood Tracker</h2>
      <p>Select your mood today:</p>
      <div className="flex justify-center gap-4 mt-6 text-3xl">
        <span>😊</span>
        <span>😐</span>
        <span>😢</span>
        <span>😠</span>
        <span>😴</span>
      </div>
    </div>
  );
};

export default MoodTracker;
