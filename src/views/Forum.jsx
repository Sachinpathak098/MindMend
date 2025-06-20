const Forum = () => {
  return (
    <div className="min-h-screen p-8 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Anonymous Forum</h2>
      <div className="space-y-4 max-w-2xl mx-auto text-left">
        <div className="p-4 bg-white shadow rounded">"How do you handle anxiety?" - Anonymous</div>
        <div className="p-4 bg-white shadow rounded">"Any tips for better sleep?" - Anonymous</div>
        <div className="p-4 bg-white shadow rounded">"I feel low lately, need some support." - Anonymous</div>
      </div>
    </div>
  );
};

export default Forum;
