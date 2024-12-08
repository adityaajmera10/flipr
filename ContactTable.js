import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((response) => setContacts(response.data))
      .catch((err) => alert("Error fetching contacts:", err));
  }, []);

  return (
    <div>
      <h2>Contact Form Submissions</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.fullName}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
