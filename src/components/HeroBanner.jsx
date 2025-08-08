import { useState, useEffect } from "react";

const HeroBanner = ({ books, onDownload }) => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const currentBook = books[currentBookIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookIndex((prev) => (prev + 1) % books.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [books.length]);

  if (!currentBook) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container - Responsive to zoom */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <img
            src={currentBook.coverImage}
            alt={currentBook.title}
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center center",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 sm:from-black/80 sm:via-black/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-start">
          <div className="max-w-full sm:max-w-2xl w-full">
            {/* Category Badge */}
            <div className="mb-3 sm:mb-4">
              <span className="bg-red-600 text-white px-2 py-1 sm:px-3 rounded-md text-xs sm:text-sm font-semibold">
                {currentBook.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight break-words">
              {currentBook.title}
            </h1>

            {/* Author */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-2 sm:mb-3">
              by {currentBook.author}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < currentBook.rating ? "fill-current" : "text-gray-600"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">
                {currentBook.rating}
              </span>
              <span className="text-gray-300 text-xs sm:text-sm">
                ({currentBook.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 max-w-full sm:max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-3">
              {currentBook.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => onDownload(currentBook)}
                className="bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-bold text-sm sm:text-base hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Now
              </button>

              <button className="bg-gray-600/70 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-bold text-sm sm:text-base hover:bg-gray-600 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default HeroBanner;
