import React, { useState } from "react";
import axios from "axios";

const ClientForm = () => {
  const [client, setClient] = useState({ name: "", description: "", designation: "" });
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("description", client.description);
    formData.append("designation", client.designation);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/api/clients", formData)
      .then(() => alert("Client added successfully!"))
      .catch((err) => alert("Error adding client:", err));
  };

  return (
    <div>
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client Name"
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />
        <textarea
          placeholder="Client Description"
          value={client.description}
          onChange={(e) => setClient({ ...client, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Client Designation"
          value={client.designation}
          onChange={(e) => setClient({ ...client, designation: e.target.value })}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
};

export default ClientForm;
