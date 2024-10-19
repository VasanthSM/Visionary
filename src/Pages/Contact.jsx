const ContactPage = () => {
    return (
      <div className="container mx-auto p-2">
        <h2 className="text-3xl font-bold text-center text-black">Contact Us</h2>
        
        <form className="max-w-lg mx-auto bg-[#F8F8FF] shadow-lg rounded-lg p-6">
          {/* Name Field */}
          <div className="m-3">
            <label className="block text-black mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your name"
            />
          </div>
  
          {/* Email Field */}
          <div className="m-3">
            <label className="block text-black mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your email"
            />
          </div>
  
          {/* Message Field */}
          <div className="m-3">
            <label className="block text-black mb-2">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              rows="3"
              placeholder="Type your message here"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:scale-105 hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactPage;
  