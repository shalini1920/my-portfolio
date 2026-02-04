export default function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "C", "Java"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React.js"] },
    { category: "Backend & Databases", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "DBMS"] },
    { category: "DevOps & Cloud", items: ["AWS", "Docker", "Jenkins", "CI/CD", "Terraform (Basics)", "Kubernetes (Basics)"] },
    { category: "OS & Networking", items: ["Linux Commands", "Bash Scripting", "Windows", "Networking", "OS Concepts"] },
    { category: "Core CS Concepts", items: ["Data Structures", "Project Management Basics", "AI/ML Basics"] },
  ];

  return (
    <section className="py-20 px-6 bg-white/5 backdrop-blur-lg">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Technical Skills</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
