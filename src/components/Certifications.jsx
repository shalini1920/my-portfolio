import aws from "../assets/aws-cloud.pdf";
import cicd from "../assets/cicd.pdf";
import google from "../assets/google-cloud.pdf";
import ibm from "../assets/ibm-cloud.pdf";
import verizon from "../assets/verizon-simulation.pdf";
import awsArch from "../assets/aws-architecture.pdf";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    provider: "Coursera",
    file: aws,
  },
  {
    title: "CI/CD Pipelines for Beginners",
    provider: "Simplilearn",
    file: cicd,
  },
  {
    title: "Cloud Engineering",
    provider: "Google",
    file: google,
  },
  {
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    file: ibm,
  },
  {
    title: "Cloud Platform Job Simulation",
    provider: "Verizon",
    file: verizon,
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    provider: "Amazon Web Services",
    file: awsArch,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gradient-to-b from-sky-50 to-blue-100"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-blue-200 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {cert.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {cert.provider}
            </p>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
