import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Kids Books", path: "/category/kids", altPaths: ["/kids"] },
    { name: "Romance", path: "/category/romance", altPaths: ["/romance"] },
    { name: "Fantasy", path: "/category/fantasy", altPaths: ["/fantasy"] },
    { name: "Mystery", path: "/category/mystery", altPaths: ["/mystery"] },
    { name: "Sci-Fi", path: "/category/sci-fi", altPaths: ["/sci-fi"] },
    // {
    //   name: "Non-Fiction",
    //   path: "/category/non-fiction",
    //   altPaths: ["/non-fiction"],
    // },
  ];

  // Function to check if a nav item is active
  const isActiveLink = (item) => {
    if (location.pathname === item.path) return true;
    if (item.altPaths && item.altPaths.includes(location.pathname)) return true;
    return false;
  };

  return (
    <nav className="bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
              <div className="text-red-600 text-lg sm:text-xl md:text-2xl font-bold">
                📚 readXpress
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = isActiveLink(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 px-2 py-2 rounded-lg text-sm xl:text-base ${
                    isActive
                      ? "text-white bg-red-600/20 border border-red-600/30 scale-105 shadow-lg shadow-red-600/20"
                      : "hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-red-400 focus:outline-none transition-colors p-1"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
              {navItems.map((item) => {
                const isActive = isActiveLink(item);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2.5 text-white hover:text-red-400 transition-all duration-200 rounded-lg text-sm ${
                      isActive
                        ? "text-red-400 bg-red-600/10 border border-red-600/20 font-semibold"
                        : "hover:bg-gray-800/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
