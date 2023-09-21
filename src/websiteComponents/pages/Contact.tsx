import React, { useState } from "react";
import axios from "axios";
import contactImage from "../../assets/Images/react-contact-image.png";
import { ContactPageSlider } from "../pageSliders/ContactSlider";

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
    <>
      <ContactPageSlider />
      <div className="row mt-5">
        <div className="col-sm-12 col-md-10 col-lg-4 mx-auto">
          <div className="container-fluid">
            <img
              src={contactImage}
              className="img-fluid mx-auto"
              alt="contact image"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-10 col-lg-4 mx-auto">
          <div className="form-group p-3">
            <form onSubmit={handleSubmit}>
              <h1 className="h1">Contact Us</h1>
              <div className="form-group">
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  placeholder="*Enter name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email address: </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  placeholder="*Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <small className="form-text" color="white">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={3}
                  cols={1}
                  required
                  className="form-control"
                  placeholder="*Enter message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                name="submit"
                className="btn btn-outline-primary mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
