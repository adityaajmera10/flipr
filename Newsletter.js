import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsletterTable = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/newsletter")
      .then((response) => setSubscribers(response.data))
      .catch((err) => alert("Error fetching subscribers:", err));
  }, []);

  return (
    <div>
      <h2>Newsletter Subscribers</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber._id}>
              <td>{subscriber.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsletterTable;
