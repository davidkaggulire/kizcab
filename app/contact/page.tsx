// components/Contact.tsx
const Contact: React.FC = () => {
    return (
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg mb-4"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg mb-4"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg mb-4"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </section>
    )
  }
  
  export default Contact
  