import React, { useState } from "react";
import axios from "axios";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.get(
        `http://localhost:3000/SendEmail?receiverEmail=ak9971259@gmail.com&subject=Assistance`
      );

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
