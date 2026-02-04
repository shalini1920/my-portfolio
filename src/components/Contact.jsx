export default function Contact() {
  return (
    <section className="py-20 px-6" id="contact">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Contact Me</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <p className="text-center text-gray-300 mb-4">
          Email me at: <span className="text-blue-400 font-semibold">shalinijagan195@gmail.com</span>
        </p>
        <form
          action="mailto:shalinijagan195@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-400 bg-white/5 text-white placeholder-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-400 bg-white/5 text-white placeholder-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded border border-gray-400 bg-white/5 text-white placeholder-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
