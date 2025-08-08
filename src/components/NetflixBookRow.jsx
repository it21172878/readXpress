import { useState, useRef, useEffect } from "react";
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
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScrollNeeded = () => {
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
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Check if scrolling is needed when component mounts or books change
  useEffect(() => {
    const timer = setTimeout(() => {
      checkScrollNeeded();
    }, 100); // Small delay to ensure images are loaded and layout is complete

    // Re-check on window resize
    const handleResize = () => {
      setTimeout(checkScrollNeeded, 100); // Small delay to ensure layout is updated
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [books]);

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
  }, [books]);

  return (
    <div className="relative group mb-12">
      {/* Section Title with See More Button */}
      <div className="flex items-center justify-between mb-6 px-4 md:px-12 max-w-screen-2xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold">{title}</h2>
        {category && (
          <button
            onClick={() => navigate(`/category/${category}`)}
            className="text-red-500 hover:text-red-400 text-sm md:text-base font-medium transition-colors duration-200 hover:underline"
          >
            See More →
          </button>
        )}
      </div>

      {/* Left Arrow - only show if scrolling is needed */}
      {needsScrolling && showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/80 hover:bg-black/95 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-white hover:scale-110"
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

      {/* Right Arrow - only show if scrolling is needed */}
      {needsScrolling && showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/80 hover:bg-black/95 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-white hover:scale-110"
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
      <div className="max-w-screen-2xl mx-auto">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onLoad={checkScrollNeeded}
          className="flex gap-4 overflow-x-auto netflix-scroll px-4 md:px-12 pb-6 pt-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: { display: "none" },
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
