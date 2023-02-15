import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-hunyadiyellow rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
