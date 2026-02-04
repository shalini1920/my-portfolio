export default function Internship() {
  return (
    <section className="py-20 px-6" id="internship">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Internship Experience</h2>
      <div className="max-w-4xl mx-auto bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2">Software Development Intern – Veract.io</h3>
        <ul className="list-disc ml-5 text-gray-300">
          <li>Worked on real-time web applications</li>
          <li>Developed frontend components using React.js</li>
          <li>Assisted in backend integration and testing</li>
          <li>Followed professional development workflows</li>
        </ul>
        <a
          href="/src/assets/internship_completion.pdf"
          download
          className="mt-4 inline-block bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition text-white"
        >
          Download Completion Letter
        </a>
      </div>
    </section>
  );
}
