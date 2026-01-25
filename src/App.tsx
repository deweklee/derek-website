import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Derek Lee</span>
          </h1>
          <p className="hero-subtitle">Software Developer at Amazon KDP</p>
          <p className="hero-description">
            Computer Science graduate from Cal Poly SLO with 2+ years of
            experience building scalable applications used by millions of users
            worldwide.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Computer Science graduate from Cal Poly SLO with a 3.9
                GPA, having graduated in June 2025. I currently work as a
                Software Developer at Amazon Kindle Direct Publishing, where I
                enhance and maintain the E-book publishing interface used by
                millions of authors worldwide.
              </p>
              <p>
                I have experience building scalable backend services,
                modernizing legacy workflows, and developing automated systems
                that improve efficiency and user satisfaction. I'm passionate
                about creating solutions that make a real impact.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>3.9</h3>
                <p>GPA</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>Millions</h3>
                <p>Users Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Software Developer</h3>
                <span className="company">Amazon Kindle Direct Publishing</span>
                <span className="duration">Jul 2025 - Present</span>
              </div>
              <ul className="experience-details">
                <li>
                  Enhanced and maintained the KDP E-book publishing interface
                  used by millions of authors worldwide
                </li>
                <li>
                  Owned and optimized backend services supporting E-book data
                  processing and metadata management
                </li>
                <li>
                  Designed and deployed high-impact author-facing features,
                  increasing publishing efficiency
                </li>
                <li>
                  Collaborated across cross-functional teams to modernize legacy
                  workflows with AWS-native solutions
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h3>Jr. Software Developer</h3>
                <span className="company">Amazon Kindle Direct Publishing</span>
                <span className="duration">Sep 2023 - Jun 2025</span>
              </div>
              <ul className="experience-details">
                <li>
                  Modernized multi-step conversion workflow using AWS Step
                  Functions, Lambda, DynamoDB, and SNS
                </li>
                <li>
                  Designed automated metadata extraction pipeline to streamline
                  author onboarding
                </li>
                <li>
                  Developed 20+ system integration test packages, increasing
                  release confidence
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h3>Software Developer</h3>
                <span className="company">Sunnyvale Wrestling Club</span>
                <span className="duration">May 2021 - Oct 2021</span>
              </div>
              <ul className="experience-details">
                <li>
                  Built fully automated web solution for managing and scoring
                  live wrestling tournaments
                </li>
                <li>
                  Directed three real-time tournaments with 300+ participants
                  across Cupertino Union School District
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-content">
            <div className="skills-text">
              <p>
                I work with a variety of technologies to build scalable
                applications and solve complex problems.
              </p>
            </div>
            <div className="skills-grid">
              {/* Languages */}
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">Go</span>
                  <span className="skill-tag">Kotlin</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>

              {/* Systems & Backend */}
              <div className="skill-category">
                <h3>Systems & Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Distributed Systems</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">Event-Driven Architectures</span>
                  <span className="skill-tag">High-Throughput Services</span>
                  <span className="skill-tag">Fault Tolerance</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="skill-category">
                <h3>Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Lambda</span>
                  <span className="skill-tag">DynamoDB</span>
                  <span className="skill-tag">SNS</span>
                  <span className="skill-tag">Step Functions</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">Linux</span>
                </div>
              </div>

              {/* Data & Reliability */}
              <div className="skill-category">
                <h3>Data & Reliability</h3>
                <div className="skill-tags">
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">NoSQL</span>
                  <span className="skill-tag">Data Modeling</span>
                  <span className="skill-tag">Integration Testing</span>
                  <span className="skill-tag">Observability</span>
                  <span className="skill-tag">System Testing</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">Mapbox</span>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-category">
                <h3>Tools & Platforms</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Supabase</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Google APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-showcase">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🗺️</div>
              </div>
              <div className="project-content">
                <h3>Cal Poly Maps</h3>
                <p className="project-description">
                  Developed an interactive campus map to help students find the
                  fastest routes between classes. Implemented real-time location
                  tracking, route optimization, intelligent search, building
                  popups, and detailed building information.
                </p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Mapbox</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://cal-poly-map.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live Site
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🛒</div>
              </div>
              <div className="project-content">
                <h3>Stocked</h3>
                <p className="project-description">
                  A simple, easy-to-use webapp to keep track of your grocery
                  lists and share them with other users. Working on implementing
                  a smart recipe-to-list feature, allowing users to form a
                  grocery list through a recipe link!
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://stocked-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live Site
                  </a>
                  <a
                    href="https://github.com/deweklee/Stocked"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out if you'd like to collaborate or
                just say hello!
              </p>
            </div>
            <div className="contact-links">
              <a
                href="/src/assets/Derek Lee's Resume (10_04_2025) (3).pdf"
                download
                className="contact-link"
              >
                <span className="contact-icon">📄</span>
                Download Resume
              </a>
              <a href="mailto:dereklee1124@gmail.com" className="contact-link">
                <span className="contact-icon">✉️</span>
                dereklee1124@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Derek Lee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
