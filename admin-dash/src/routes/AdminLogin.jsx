import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      navigate("/admin-dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className=" min-h-screen px-10 md:px-32 bg-gray-100">
      {/* Left Side Image */}

      <img
        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
        alt="Admin Login"
        className="h-[200px] w-[200px] object-cover"
      />
      {/* Right Side Login Form */}
      <div className="md:w-1/3 w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Admin Login
        </h2>
        {/* Error Message Placeholder */}
        {false && <p className="text-red-500 text-center">Error Message</p>}

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?
            <a
              href="/admin-registration"
              className="text-green-500 hover:text-green-600"
            >
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
