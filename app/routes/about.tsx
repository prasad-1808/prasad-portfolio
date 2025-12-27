import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Prasad Venkatesh" },
    { name: "description", content: "Learn about my background, experience, and technical expertise" },
  ];
}

export default function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Professional Summary</h2>
          <p>
            I'm a dedicated Full Stack Developer with 3+ years of experience building 
            scalable web applications. I specialize in React, Node.js, and cloud technologies, 
            with a passion for creating efficient, user-friendly solutions that drive business growth.
          </p>
        </div>

        <div className="about-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Full Stack Developer</h3>
            <p className="company">Tech Solutions Inc. • 2022 - Present</p>
            <ul>
              <li>Developed and maintained 10+ React applications serving 50K+ users</li>
              <li>Built RESTful APIs using Node.js and Express, improving response time by 40%</li>
              <li>Implemented CI/CD pipelines using AWS services, reducing deployment time by 60%</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Frontend Developer</h3>
            <p className="company">Digital Innovations • 2021 - 2022</p>
            <ul>
              <li>Created responsive web interfaces using React and TypeScript</li>
              <li>Collaborated with UX/UI teams to implement pixel-perfect designs</li>
              <li>Optimized application performance, achieving 95+ Lighthouse scores</li>
            </ul>
          </div>
        </div>

        <div className="about-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skills">
                <span className="skill">React</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Next.js</span>
                <span className="skill">HTML5/CSS3</span>
                <span className="skill">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <div className="skills">
                <span className="skill">Node.js</span>
                <span className="skill">Express.js</span>
                <span className="skill">Python</span>
                <span className="skill">PostgreSQL</span>
                <span className="skill">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Cloud & Tools</h4>
              <div className="skills">
                <span className="skill">AWS</span>
                <span className="skill">Docker</span>
                <span className="skill">Git</span>
                <span className="skill">Jenkins</span>
                <span className="skill">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="institution">VIT University • 2017 - 2021</p>
            <p>CGPA: 8.5/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
