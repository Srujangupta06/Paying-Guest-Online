import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error message
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center justify-center min-h-screen md:min-h-[90vh] bg-gray-100 px-6 md:px-32 gap-y-8">
      
      {/* Left side: Contact Form */}
      <div className="md:w-[40%] w-full">
        <h1 className="text-2xl font-semibold my-3">Get In Touch</h1>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="space-y-3  p-8 bg-white rounded-lg shadow-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-gray-300 px-2 py-1 mt-1 rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-gray-300 px-2 py-1 mt-1 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-2 border-gray-300 px-2 py-1 mt-1 rounded-lg"
              placeholder="Enter your message"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Right side: Image */}
      <div className="md:w-[40%] w-full md:flex md:justify-center hidden">
        <img
          src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741198791/Contact_us-amico_gkl93k.png" 
          alt="Contact Us"
          className="w-full h-auto object-cover"
        />
      </div>

      
    </div>
  );
};

export default ContactUs;
