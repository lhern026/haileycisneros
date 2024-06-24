import React from "react";

function Contact() {
  return (
    <div className="py-20 bg-background">
      <h2 className="text-4xl font-bold mb-6 text-primary">Contact Me</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="block text-text mb-2">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-text mb-2">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-text mb-2">Message:</label>
          <textarea
            name="message"
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded hover:bg-secondary transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
