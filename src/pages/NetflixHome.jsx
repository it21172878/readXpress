import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import NetflixBookRow from "../components/NetflixBookRow";
import { booksData } from "../data/books";

const Home = () => {
  const handleDownload = (book) => {
    // Open directly to avoid popup blocker
    const opened = window.open(book.megaUrl, "_blank");
    
    // Show feedback only if popup wasn't blocked
    if (opened) {
      // Optional: You can add a toast notification here
      console.log(`Downloading "${book.title}" by ${book.author}`);
    } else {
      // Fallback if popup is blocked
      alert(`Please allow popups to download "${book.title}"`);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <HeroBanner books={booksData.featured} onDownload={handleDownload} />

      {/* Content Sections */}
      <div className="relative -mt-24 z-20 bg-gradient-to-t from-black via-black to-transparent pt-16">
        {/* Featured Books */}
        <NetflixBookRow
          title="Featured Books"
          books={booksData.featured}
          onDownload={handleDownload}
          size="large"
        />

        {/* Kids Books */}
        <NetflixBookRow
          title="Kids Books"
          books={booksData.kids}
          onDownload={handleDownload}
          category="kids"
        />

        {/* Romance */}
        <NetflixBookRow
          title="Romance"
          books={booksData.romance}
          onDownload={handleDownload}
          category="romance"
        />

        {/* Fantasy */}
        <NetflixBookRow
          title="Fantasy & Adventure"
          books={booksData.fantasy}
          onDownload={handleDownload}
          category="fantasy"
        />

        {/* Mystery */}
        <NetflixBookRow
          title="Mystery & Thriller"
          books={booksData.mystery}
          onDownload={handleDownload}
          category="mystery"
        />

        {/* Sci-Fi */}
        <NetflixBookRow
          title="Science Fiction"
          books={booksData.scifi}
          onDownload={handleDownload}
          category="sci-fi"
        />

        {/* Non-Fiction */}
        {/* <NetflixBookRow
          title="Non-Fiction"
          books={booksData.nonfiction}
          onDownload={handleDownload}
          category="non-fiction"
        /> */}

        {/* Browse by Genre Section - Enhanced */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-12 max-w-screen-2xl mx-auto relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5 blur-3xl"></div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                Browse by Genre
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Discover your next favorite book across our curated collection
                of genres
              </p>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            </div>

            {/* Genre Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  name: "Kids Books",
                  path: "/category/kids",
                  emoji: "👶",
                  gradient: "from-yellow-400 via-orange-500 to-red-500",
                  description: "Fun stories for little ones",
                  books: booksData.kids?.length || 0,
                },
                {
                  name: "Romance",
                  path: "/category/romance",
                  emoji: "💕",
                  gradient: "from-pink-400 via-red-500 to-purple-600",
                  description: "Love stories that capture hearts",
                  books: booksData.romance?.length || 0,
                },
                {
                  name: "Fantasy",
                  path: "/category/fantasy",
                  emoji: "🐉",
                  gradient: "from-purple-400 via-indigo-500 to-blue-600",
                  description: "Magical worlds and epic adventures",
                  books: booksData.fantasy?.length || 0,
                },
                {
                  name: "Mystery",
                  path: "/category/mystery",
                  emoji: "🔍",
                  gradient: "from-gray-400 via-gray-600 to-gray-800",
                  description: "Thrilling mysteries and suspense",
                  books: booksData.mystery?.length || 0,
                },
                {
                  name: "Sci-Fi",
                  path: "/category/sci-fi",
                  emoji: "🚀",
                  gradient: "from-cyan-400 via-blue-500 to-indigo-600",
                  description: "Future worlds and space adventures",
                  books: booksData.scifi?.length || 0,
                },
                {
                  name: "Non-Fiction",
                  path: "#",
                  // path: "/category/non-fiction",
                  emoji: "📖",
                  gradient: "from-green-400 via-emerald-500 to-teal-600",
                  // description: "Real stories and knowledge",
                  description: "Comming Soon...",
                  // books: booksData.nonfiction?.length || 0,
                  books: "uploading...",
                },
              ].map((category, index) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-4 sm:p-6 md:p-8 h-40 sm:h-44 md:h-48 flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="flex items-start justify-between">
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">
                        {category.emoji}
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-xs sm:text-sm font-medium">
                          Books
                        </div>
                        <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                          {category.books}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-gray-400 text-sm">
                Can't find what you're looking for?
                <span className="text-red-400 hover:text-red-300 cursor-pointer ml-1 transition-colors">
                  Contact us for special requests
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
