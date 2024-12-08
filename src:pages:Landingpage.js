import React, { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForm, setContactForm] = useState({ fullName: "", email: "", mobile: "", city: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then((response) => setProjects(response.data));
    axios.get("http://localhost:5000/api/clients").then((response) => setClients(response.data));
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/contact", contactForm).then(() => alert("Form submitted!"));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/newsletter", { email: newsletterEmail }).then(() => alert("Subscribed!"));
  };

  return (
    <div>
      <h1>Welcome to Our Website</h1>

      {/* Projects Section */}
      <h2>Our Projects</h2>
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <img src={`http://localhost:5000/${project.image}`} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Happy Clients Section */}
      <h2>Happy Clients</h2>
      <div>
        {clients.map((client) => (
          <div key={client._id}>
            <img src={`http://localhost:5000/${client.image}`} alt={client.name} />
            <h3>{client.name}</h3>
            <p>{client.description}</p>
            <small>{client.designation}</small>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <h2>Contact Us</h2>
      <form onSubmit={handleContactSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={contactForm.fullName}
          onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={contactForm.email}
          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={contactForm.mobile}
          onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={contactForm.city}
          onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Newsletter Subscription */}
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleNewsletterSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default LandingPage;
