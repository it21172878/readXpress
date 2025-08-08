import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NetflixBookCard from "./NetflixBookCard";

const BookRow = ({ title, books, onDownload, size = "normal", category }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [needsScrolling, setNeedsScrolling] = useState(false);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // Responsive scroll amount based on screen size
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 1024;
      let scrollAmount;

      if (isMobile) {
        scrollAmount = direction === "left" ? -200 : 200;
      } else if (isTablet) {
        scrollAmount = direction === "left" ? -300 : 300;
      } else {
        scrollAmount = direction === "left" ? -400 : 400;
      }

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScrollNeeded = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth;
      setNeedsScrolling(isScrollable);
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        isScrollable &&
          container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  }, []);

  // Check if scrolling is needed when component mounts or books change
  useEffect(() => {
    const timer = setTimeout(() => {
      checkScrollNeeded();
    }, 100);

    // Re-check on window resize with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScrollNeeded, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [books, checkScrollNeeded]);

  // Also check when images finish loading
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const images = container.querySelectorAll("img");
      let loadedCount = 0;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          checkScrollNeeded();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.onload = checkAllLoaded;
        }
      });
    }
  }, [books, checkScrollNeeded]);

  return (
    <div className="relative group mb-12">
      {/* Section Title with See More Button */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 px-2 sm:px-4 md:px-12 max-w-screen-2xl mx-auto">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
          {title}
        </h2>
        {category && (
          <button
            onClick={() => navigate(`/category/${category}`)}
            className="text-red-500 hover:text-red-400 text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 hover:underline"
          >
            See More →
          </button>
        )}
      </div>

      {/* Left Arrow - hidden on mobile, show on desktop */}
      {needsScrolling && showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/80 hover:bg-black/95 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-white hover:scale-110"
          style={{ zIndex: 35 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Right Arrow - hidden on mobile, show on desktop */}
      {needsScrolling && showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/80 hover:bg-black/95 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-white hover:scale-110"
          style={{ zIndex: 35 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Books Container */}
      <div className="max-w-screen-2xl mx-auto relative">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onLoad={checkScrollNeeded}
          className="flex gap-3 sm:gap-4 md:gap-4 overflow-x-auto netflix-scroll px-2 sm:px-4 md:px-12 pb-6 pt-2 touch-pan-x relative z-10"
          style={{
            touchAction: "pan-x",
            WebkitOverflowScrolling: "touch",
            minHeight: "280px",
          }}
        >
          {books.map((book) => (
            <NetflixBookCard
              key={book.id}
              book={book}
              onDownload={onDownload}
              size={size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRow;
