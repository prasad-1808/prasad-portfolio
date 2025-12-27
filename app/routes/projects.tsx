import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Prasad Venkatesh" },
    { name: "description", content: "Explore my portfolio of web applications and software projects" },
  ];
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for a client serving 10K+ customers.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS S3"],
    github: "https://github.com/prasad/ecommerce-platform",
    demo: "https://ecommerce-demo.prasadvenkatesh.dev",
    image: "/api/placeholder/400/250",
    highlights: ["Payment Gateway Integration", "Real-time Inventory", "Admin Analytics"]
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
    tech: ["React", "TypeScript", "Socket.io", "Express.js", "MongoDB"],
    github: "https://github.com/prasad/task-manager",
    demo: "https://taskmanager.prasadvenkatesh.dev",
    image: "/api/placeholder/400/250",
    highlights: ["Real-time Collaboration", "Advanced Reporting", "Team Management"]
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Interactive weather data visualization platform with predictive analytics, historical data comparison, and location-based insights.",
    tech: ["React", "D3.js", "Python", "FastAPI", "Weather API"],
    github: "https://github.com/prasad/weather-dashboard",
    demo: "https://weather.prasadvenkatesh.dev",
    image: "/api/placeholder/400/250",
    highlights: ["Data Visualization", "Predictive Analytics", "API Integration"]
  },
  {
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media monitoring and analytics platform for businesses to track engagement and performance metrics.",
    tech: ["Next.js", "Node.js", "Redis", "Chart.js", "Social APIs"],
    github: "https://github.com/prasad/social-analytics",
    demo: "https://social-analytics.prasadvenkatesh.dev",
    image: "/api/placeholder/400/250",
    highlights: ["Multi-platform Integration", "Real-time Analytics", "Custom Reports"]
  }
];

export default function Projects() {
  return (
    <div className="page">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>A showcase of my recent work in web development and software engineering</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">✓ {highlight}</span>
                ))}
              </div>
              
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="btn secondary" target="_blank" rel="noopener noreferrer">
                  <span>📁</span> Code
                </a>
                <a href={project.demo} className="btn primary" target="_blank" rel="noopener noreferrer">
                  <span>🚀</span> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-footer">
        <p>Want to see more projects? Check out my <a href="https://github.com/prasad" target="_blank" rel="noopener noreferrer">GitHub profile</a></p>
      </div>
    </div>
  );
}
