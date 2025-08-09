import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NetflixHome from "./pages/NetflixHome";
import KidsBooks from "./pages/KidsBooks";
import Romance from "./pages/Romance";
import Fantasy from "./pages/Fantasy";
import Mystery from "./pages/Mystery";
import SciFi from "./pages/SciFi";
import NonFiction from "./pages/NonFiction";

function App() {
  // References to track popup state without causing re-renders
  const clickCountRef = useRef(0);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    // Adsterra direct links for popup ads
    const adLinks = [
      "https://www.profitableratecpm.com/rgj9t3wx?key=8c7ae6cec1988344fe02ade3465b1ef7",
      "https://www.profitableratecpm.com/s981mftq5?key=756d502ab647f3e44220c3318289145f",
      "https://www.profitableratecpm.com/k2v1sqzc?key=301ce07c3c76190119d05a625a11cf6e",
      "https://www.profitableratecpm.com/v54144ki?key=528322043f2eaeb1e44536b0a7e57c1c",
      "https://www.profitableratecpm.com/f01ep4wh?key=b202d6cf8fe312ae4da587fa83fcec88",
      "https://www.profitableratecpm.com/frtg2m12d?key=72a6fbc3867cf19b66cf48f5031f39a7",
      "https://www.profitableratecpm.com/ugweppctm?key=d972a856b7437e4ad549a60971bf6d61",
      "https://www.profitableratecpm.com/c4diqa3d?key=a0fc5e8b221fad88d5c95385692a6ac9",
      "https://www.profitableratecpm.com/qemntymh9?key=0604ecb2c0f8aaf52f87f6601c6f61ad",
      "https://www.profitableratecpm.com/ut8nek9gzt?key=7ce1426146450470a3c436b87010fc21",
    ];

    // Function to get a random ad link
    const getRandomAdLink = () => {
      const randomIndex = Math.floor(Math.random() * adLinks.length);
      return adLinks[randomIndex];
    };

    // Function to add cursor override CSS class
    const enableCursorOverride = () => {
      document.body.classList.add("popup-cursor-override");
    };

    // Function to remove cursor override CSS class
    const disableCursorOverride = () => {
      document.body.classList.remove("popup-cursor-override");
    };

    // Function to reset the popup system for next cycle
    const resetPopupSystem = () => {
      clickCountRef.current = 0;
      enableCursorOverride();
      console.log("Popup system reset - ready for next cycle");
    };

    // Global click handler for popup intercept
    const handleGlobalClick = (event) => {
      // Only intercept during first and second click phases
      if (clickCountRef.current < 2) {
        // Prevent default behavior to stop normal navigation
        event.preventDefault();
        event.stopPropagation();

        // Increment click count
        clickCountRef.current++;

        // Open random popup (must be called directly in click handler)
        const randomLink = getRandomAdLink();
        window.open(randomLink, "_blank");

        console.log(
          `Popup click ${clickCountRef.current}/2 - Opened: ${randomLink}`
        );

        // If this was the second click, end popup phase and start 20-second timer
        if (clickCountRef.current >= 2) {
          // Remove cursor override to restore normal behavior
          disableCursorOverride();
          console.log("Popup phase ended - Normal browsing restored");

          // Clear any existing timer
          if (resetTimerRef.current) {
            clearTimeout(resetTimerRef.current);
          }

          // Set 20-second timer to reset the system
          resetTimerRef.current = setTimeout(() => {
            resetPopupSystem();
          }, 20000);
        }
      }
    };

    // Initialize the popup system
    enableCursorOverride();
    console.log("Popup system initialized - First cycle started");

    // Add global click listener with capture phase to intercept all clicks
    document.addEventListener("click", handleGlobalClick, true);

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      disableCursorOverride();
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* CSS for cursor override during popup phases */}
      <style>{`
        /* Force default cursor on all elements during popup phase */
        .popup-cursor-override * {
          cursor: default !important;
        }
        
        /* Specifically target clickable elements */
        .popup-cursor-override a,
        .popup-cursor-override button,
        .popup-cursor-override .cursor-pointer,
        .popup-cursor-override [role="button"] {
          cursor: default !important;
        }
        
        /* Apply to pseudo-elements as well */
        .popup-cursor-override *::before,
        .popup-cursor-override *::after {
          cursor: default !important;
        }
      `}</style>

      <Router>
        <div className="App min-h-screen bg-black no-smooth-scroll">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<NetflixHome />} />
              <Route path="/category/kids" element={<KidsBooks />} />
              <Route path="/category/romance" element={<Romance />} />
              <Route path="/category/fantasy" element={<Fantasy />} />
              <Route path="/category/mystery" element={<Mystery />} />
              <Route path="/category/sci-fi" element={<SciFi />} />
              <Route path="/category/non-fiction" element={<NonFiction />} />
              {/* Keep the original routes for backward compatibility */}
              <Route path="/kids" element={<KidsBooks />} />
              <Route path="/romance" element={<Romance />} />
              <Route path="/fantasy" element={<Fantasy />} />
              <Route path="/mystery" element={<Mystery />} />
              <Route path="/sci-fi" element={<SciFi />} />
              <Route path="/non-fiction" element={<NonFiction />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
