import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import ClientForm from "./ClientForm";
import ContactTable from "./ContactTable";
import NewsletterTable from "./NewsletterTable";

const AdminPanel = () => {
  const [view, setView] = useState("projects");

  return (
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <button onClick={() => setView("projects")}>Manage Projects</button>
        <button onClick={() => setView("clients")}>Manage Clients</button>
        <button onClick={() => setView("contacts")}>View Contact Forms</button>
        <button onClick={() => setView("newsletter")}>View Subscribers</button>
      </nav>

      {view === "projects" && <ProjectForm />}
      {view === "clients" && <ClientForm />}
      {view === "contacts" && <ContactTable />}
      {view === "newsletter" && <NewsletterTable />}
    </div>
  );
};

export default AdminPanel;
