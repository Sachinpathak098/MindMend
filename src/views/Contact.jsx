const Contact = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-4">
        Have questions or need help? Reach out to us anytime.
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
