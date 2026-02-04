export default function Education() {
  return (
    <section className="py-20 px-6 bg-white/5 backdrop-blur-lg" id="education">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Education</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">B.E. Computer Science</h3>
          <p className="text-gray-300 mb-1">College: C. Abdul Hakeem College of Engineering and Technology, Melvisharam</p>
          <p className="text-gray-300 mb-1">Affiliated: Anna University</p>
          <p className="text-gray-300">CGPA: 7.94</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Senior Secondary School</h3>
          <p className="text-gray-300">Vedavalli Vidyalaya Senior Secondary School, Walajapet</p>
        </div>
      </div>
    </section>
  );
}
