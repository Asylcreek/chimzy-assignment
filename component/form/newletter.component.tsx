import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="max-w-md mx-auto bg-[#0C694C7A] rounded-[8px] py-[24px] px-[56px]">
      <h2 className="text-white text-2xl font-bold mb-2">Be in the know</h2>
      <p className="text-white mb-6">Subscribe to our newsletter</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-1" htmlFor="firstName">
            Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter name"
            className="w-full p-3 rounded-md text-gray-700"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-white mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            className="w-full p-3 rounded-md text-gray-700"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-white mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="w-full p-3 rounded-md text-gray-700"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-md"
        >
          Subscribe
        </button>
        <p className="text-xs text-white text-center mt-4">
          By ticking this box you agree to receive marketing and promotional
          emails from us. More information can be found in our privacy{" "}
          <span className="font-bold">policy</span>.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
