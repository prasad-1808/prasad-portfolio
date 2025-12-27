import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Prasad Venkatesh" },
    { name: "description", content: "Get in touch for collaboration opportunities" },
  ];
}

export default function Contact() {
  return (
    <div className="page">
      <h1>Let's Work Together</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm always interested in new opportunities, challenging projects, and collaborations. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:prasadvenki60@gmail.com">prasadvenki60@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/prasad-venkatesh" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/prasad-venkatesh
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/prasad" target="_blank" rel="noopener noreferrer">
                  github.com/prasad
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>
          
          <div className="availability">
            <h3>Current Status</h3>
            <div className="status-indicator">
              <span className="status-dot available"></span>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form">
          <h3>Send a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project or opportunity..."></textarea>
          </div>
          <button type="submit" className="btn primary full-width">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
