import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center text-gray-700">
        <div className="mb-4 md:mb-0 flex items-center space-x-3">
          <img
            src={logo}
            alt="#50DaysOfReact Logo"
            className="h-20 w-35 mr-3"
          />
        </div>

        <nav className="flex space-x-6 mb-4 md:mb-0">
          <Link
            to="/"
            className="border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 transition-colors duration-300"
          >
            About
          </Link>
        </nav>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Ad-Manisha/fridgepal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <svg
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.026 2.747-1.026.546 1.376.202 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.933.359.31.678.92.678 1.855 0 1.337-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.015 10.015 0 0022 12c0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} FridgePal. All rights reserved.
      </div>
    </footer>
  );
}
