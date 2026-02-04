import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 bg-gradient-to-b from-blue-100 to-white">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">Shalini J</h1>
        <p className="text-lg text-gray-700 mb-6">
          Cloud & Full-Stack Developer | Tech Enthusiast
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            My Projects
          </a>
          <a
            href="/src/assets/resume.pdf"
            download
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={profile}
          alt="Shalini J"
          className="w-60 h-60 object-cover rounded-full border-4 border-blue-300 shadow-lg"
        />
      </div>
    </section>
  );
}
