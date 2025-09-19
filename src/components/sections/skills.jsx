import Card from "./card";

const technicalSkills = [
  { title: "Programming", items: ["Java", "Python", "R"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Derby"] },
  { title: "IDEs", items: ["VS Code", "NetBeans", "Eclipse", "RStudio"] },
  { title: "Design Tools", items: ["Photoshop", "Canva", "Figma", "Adobe Animate", "Adobe Premiere", "DaVinci Resolve"] },
  { title: "Content Management", items: ["WordPress"] },
  { title: "Productivity", items: ["Microsoft Word"] },
];

const softSkills = [
  "Active Listening",
  "Teamwork",
  "Cooperation",
  "Understanding",
  "Creative Thinking",
  "Idea Generation",
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-100 px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Skills Overview</h2>

      {/* Technical Skills */}
      <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {technicalSkills.map((skill, i) => (
          <Card key={i} title={skill.title} items={skill.items} />
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {softSkills.map((skill, i) => (
          <Card key={i} title={skill} items={[]} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
