import React, { useState } from "react";

const LoginSignupForm = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginMode) {
      // Handle login submission
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      // Handle signup submission
      console.log(
        "Signing up with:",
        formData.name,
        formData.email,
        formData.password
      );
    }
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {loginMode ? "Login" : "Sign up"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!loginMode && (
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loginMode ? "Login" : "Signup"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={() => setLoginMode(!loginMode)}
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
        >
          {loginMode
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
