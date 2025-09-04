import { useState } from 'react';

export default function Contact({ isDarkMode }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${contactForm.name}! I'll get back to you soon. 📧`);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <p className="text-center mb-12 text-lg">
          I'm open to collaborating on interesting projects. Let's work together!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              placeholder="Your Message"
              rows="5"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Send Message 📧
          </button>
        </form>
      </div>
    </section>
  );
}