// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Red Wine
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                White Wine
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Rosé Wine
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Sparkling Wine
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <p className="mb-4">Stay updated on social media:</p>
          <div className="flex">
            <a href="#" className="mr-4 text-3xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="mr-4 text-3xl hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-3xl hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">123 Wine Street</p>
          <p className="mb-4">Cityville, Wineland</p>
          <p>Email: info@winestore.com</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2023 Wine Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
