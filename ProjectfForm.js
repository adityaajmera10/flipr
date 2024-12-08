import React, { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [project, setProject] = useState({ name: "", description: "" });
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/api/projects", formData)
      .then(() => alert("Project added successfully!"))
      .catch((err) => alert("Error adding project:", err));
  };

  return (
    <div>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
