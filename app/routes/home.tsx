import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prasad Venkatesh - Full Stack Developer" },
    { name: "description", content: "Experienced Full Stack Developer specializing in React, Node.js, and cloud technologies" },
  ];
}

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Prasad Venkatesh</h1>
        <h2>Full Stack Developer</h2>
        <p>Passionate about building scalable web applications with modern technologies</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn secondary">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
}
