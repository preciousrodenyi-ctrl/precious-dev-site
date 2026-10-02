import "./App.css";

import {
  Globe,
  Monitor,
  ShoppingCart,
  CalendarDays,
  Code2,
  Wrench,
  Check,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  FileCode2,
  Database,
  GitBranch,
  Server
} from "lucide-react";

function App() {
  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          Precious<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Get a Quote
        </a>

      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-text">

          <p className="small-heading">
            HELLO, I'M
          </p>

          <h1>
            Precious Faith
            <span>Rodenyi</span>
          </h1>

          <h2>
            Junior Software Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly websites
            and web applications that help businesses turn ideas
            into real digital solutions.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="primary-button">
              Let's Work Together
              <ArrowRight size={18} />
            </a>

            <a href="#projects" className="secondary-button">
              View My Work
            </a>

          </div>


          <div className="quick-info">

            <div>
              <strong>3+</strong>
              <small>Projects</small>
            </div>

            <div>
              <strong>8+</strong>
              <small>Technologies</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>Commitment</small>
            </div>

          </div>

        </div>


        {/* PHOTO + CODE */}
        <div className="hero-card">

          <div className="profile-circle">

            <img
              src="/profile.jpg"
              alt="Precious Faith Rodenyi"
            />

          </div>


          <div className="code-card">

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Precious Rodenyi",
  role: "Junior Developer",
  skills: [
    "React",
    "Python",
    "Flask",
    "SQL"
  ],
  passion: "Building solutions"
};`}
            </pre>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="services-section" id="services">

        <div className="section-heading">

          <p className="section-label">
            MY SERVICES
          </p>

          <h2>
            What I Can Build For You
          </h2>

          <p>
            Professional digital solutions for individuals,
            businesses and organizations.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-icon">
              <Globe size={32} strokeWidth={1.8} />
            </div>

            <h3>
              Website Development
            </h3>

            <p>
              Modern, responsive websites for businesses,
              portfolios, organizations and personal brands.
            </p>

            <div className="price">
              From
              <strong>KSh 10,000</strong>
            </div>

          </div>


          <div className="service-card featured">

            <div className="popular">
              POPULAR
            </div>

            <div className="service-icon">
              <Monitor size={32} strokeWidth={1.8} />
            </div>

            <h3>
              Business Website
            </h3>

            <p>
              A complete professional website with multiple
              pages, contact information and responsive design.
            </p>

            <div className="price">
              From
              <strong>KSh 20,000</strong>
            </div>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <ShoppingCart size={32} strokeWidth={1.8} />
            </div>

            <h3>
              E-Commerce Website
            </h3>

            <p>
              Online stores where customers can browse products,
              place orders and make payments.
            </p>

            <div className="price">
              From
              <strong>KSh 40,000</strong>
            </div>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <CalendarDays size={32} strokeWidth={1.8} />
            </div>

            <h3>
              Booking System
            </h3>

            <p>
              Booking and appointment systems for salons,
              clinics, events, businesses and services.
            </p>

            <div className="price">
              From
              <strong>KSh 35,000</strong>
            </div>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Code2 size={32} strokeWidth={1.8} />
            </div>

            <h3>
              Custom Web Application
            </h3>

            <p>
              Custom systems built around your business needs,
              including dashboards, authentication and databases.
            </p>

            <div className="price">
              From
              <strong>KSh 50,000</strong>
            </div>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Wrench size={32} strokeWidth={1.8} />
            </div>

            <h3>
              Website Maintenance
            </h3>

            <p>
              Bug fixing, updates, content changes and
              ongoing technical support.
            </p>

            <div className="price">
              From
              <strong>KSh 2,000/month</strong>
            </div>

          </div>

        </div>


        {/* INCLUDED */}
        <div className="included-section">

          <h3>
            What's Included
          </h3>

          <div className="included-grid">

            <span>
              <Check size={18} />
              Mobile Responsive Design
            </span>

            <span>
              <Check size={18} />
              Modern User Interface
            </span>

            <span>
              <Check size={18} />
              Contact & WhatsApp Integration
            </span>

            <span>
              <Check size={18} />
              Database & Backend Development
            </span>

            <span>
              <Check size={18} />
              User Authentication
            </span>

            <span>
              <Check size={18} />
              Payment Integration
            </span>

            <span>
              <Check size={18} />
              Deployment & Setup
            </span>

            <span>
              <Check size={18} />
              Post-Launch Support
            </span>

          </div>

        </div>


        {/* QUOTE */}
        <div className="quote-box">

          <h3>
            Need something different?
          </h3>

          <p>
            Tell me what you need and I'll provide a quote
            based on your requirements.
          </p>

          <a href="#contact" className="primary-button">
            Request a Quote
            <ArrowRight size={18} />
          </a>

        </div>

      </section>


      {/* SKILLS */}
      <section className="skills-section" id="skills">

        <div className="section-heading">

          <p className="section-label">
            MY SKILLS
          </p>

          <h2>
            Technologies I Work With
          </h2>

          <p>
            Tools and technologies I use to build modern
            websites and web applications.
          </p>

        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">
              <FileCode2 size={28} />
            </div>

            <div>
              <h3>React</h3>
              <p>Frontend Development</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <Code2 size={28} />
            </div>

            <div>
              <h3>JavaScript</h3>
              <p>Web Development</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <Code2 size={28} />
            </div>

            <div>
              <h3>Python</h3>
              <p>Backend Development</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <Server size={28} />
            </div>

            <div>
              <h3>Flask</h3>
              <p>Web APIs & Backend</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <Database size={28} />
            </div>

            <div>
              <h3>SQL</h3>
              <p>Database Management</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <Globe size={28} />
            </div>

            <div>
              <h3>HTML & CSS</h3>
              <p>Web Design</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <GitBranch size={28} />
            </div>

            <div>
              <h3>Git & GitHub</h3>
              <p>Version Control</p>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">
              <Monitor size={28} />
            </div>

            <div>
              <h3>Responsive Design</h3>
              <p>Mobile & Desktop</p>
            </div>
          </div>

        </div>

      </section>

{/* PROJECTS */}
<section className="projects-section" id="projects">

  <p className="section-label">
    MY WORK
  </p>

  <h2>
    Featured Projects
  </h2>

  <p className="projects-intro">
    A selection of projects I have built using modern
    web development technologies.
  </p>


  <div className="projects-grid">

    {/* EVENTHUB */}
    <div className="project-card">

      <div className="project-number">
        01
      </div>

      <h3>
        EventHub
      </h3>

      <p>
        Event management platform with user authentication,
        event creation and management features.
      </p>

      <div className="tech">
        React · Flask · SQL
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/preciousrodenyi-ctrl"
          target="_blank"
          rel="noreferrer"
          className="project-button github-button"
        >
          GitHub
          <ArrowRight size={16} />
        </a>

        <a
          href="https://event-management-system-frontend-1.onrender.com"
          target="_blank"
          rel="noreferrer"
          className="project-button demo-button"
        >
          Live Demo
          <ArrowRight size={16} />
        </a>

      </div>

    </div>


    {/* BLUE-CART */}
    <div className="project-card">

      <div className="project-number">
        02
      </div>

      <h3>
        Blue-Cart
      </h3>

      <p>
        E-commerce platform featuring product search,
        filtering and shopping functionality.
      </p>

      <div className="tech">
        React · Python · Flask
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/olivermooz-117/Blue-Cart-frontend-"
          target="_blank"
          rel="noreferrer"
          className="project-button github-button"
        >
          GitHub
          <ArrowRight size={16} />
        </a>

        <a
          href="#contact"
          className="project-button demo-button"
        >
          Live Demo
          <ArrowRight size={16} />
        </a>

      </div>

    </div>


    {/* INVENTORY MANAGEMENT SYSTEM */}
    <div className="project-card">

      <div className="project-number">
        03
      </div>

      <h3>
        Inventory Management System
      </h3>

      <p>
        Inventory management application for managing
        products, stock and business data.
      </p>

      <div className="tech">
        Python · Flask · SQL
      </div>

      <div className="project-buttons">

        <a
          href="https://github.com/preciousrodenyi-ctrl/inventory-management-system"
          target="_blank"
          rel="noreferrer"
          className="project-button github-button"
        >
          GitHub
          <ArrowRight size={16} />
        </a>

        <a
          href="#contact"
          className="project-button demo-button"
        >
          Live Demo
          <ArrowRight size={16} />
        </a>

      </div>

    </div>

  </div>

</section>


      {/* ABOUT */}
      <section className="about-section" id="about">

        <div>

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Turning Ideas Into Code
          </h2>

        </div>


        <div className="about-text">

          <p>
            I'm Precious Faith Rodenyi, a Junior Software Developer
            passionate about building useful and user-friendly
            digital solutions.
          </p>

          <p>
            I work with React, JavaScript, Python, Flask, SQL,
            HTML, CSS and Git/GitHub.
          </p>

          <p>
            Whether you need a simple website or a custom web
            application, I can help turn your idea into a working
            digital product.
          </p>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <p className="section-label">
          LET'S WORK TOGETHER
        </p>

        <h2>
          Have a Project in Mind?
        </h2>

        <p>
          Tell me what you need and let's build it together.
        </p>


        <div className="contact-buttons">

          <a
            href="https://wa.me/254716030555"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <MessageCircle size={19} />
            WhatsApp Me
          </a>


          <a
            href="mailto:preciousrodenyi@gmail.com"
            className="secondary-button"
          >
            <Mail size={19} />
            Send Email
          </a>

        </div>


        <div className="contact-details">

          <p>
            <Phone size={17} />
            0716030555
          </p>

          <p>
            <Mail size={17} />
            preciousrodenyi@gmail.com
          </p>

          <p>
            <span>GitHub:</span>

            <a
              href="https://github.com/preciousrodenyi-ctrl"
              target="_blank"
              rel="noreferrer"
            >
              github.com/preciousrodenyi-ctrl
            </a>

          </p>

          <p>
            <span>LinkedIn:</span>

            <a
              href="https://www.linkedin.com/in/precious-rodenyi-8585653b4/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>

          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <strong>
          Precious<span>.</span>
        </strong>

        <p>
          © 2026 Precious Faith Rodenyi
        </p>

        <p>
          Junior Software Developer
        </p>

      </footer>

    </div>
  );
}

export default App;