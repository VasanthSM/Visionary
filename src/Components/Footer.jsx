import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F0FFFF] text-black p-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <a href="/privacy" className="hover:text-blue-500 transition duration-200">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-500 transition duration-200">Terms of Service</a>
          <a href="/contact" className="hover:text-blue-500 transition duration-200">Contact Us</a>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0 items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-200">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-200">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Visionary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
