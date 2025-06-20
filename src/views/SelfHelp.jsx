const SelfHelp = () => {
  return (
    <div className="min-h-screen p-8 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Self-Help Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <iframe className="w-full h-56" src="https://www.youtube.com/embed/ZToicYcHIOU" title="Mindfulness Video" />
        <iframe className="w-full h-56" src="https://www.youtube.com/embed/1vx8iUvfyCY" title="Meditation Video" />
        <iframe className="w-full h-56" src="https://www.youtube.com/embed/inpok4MKVLM" title="Breathing Video" />
      </div>
    </div>
  );
};

export default SelfHelp;
