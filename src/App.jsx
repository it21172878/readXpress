import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import { handleAdClick, startResetTimer } from "./utils/adRedirect";

function App() {
  useEffect(() => {
    // Start the reset timer system
    startResetTimer();

    const handleClick = (event) => {
      // Only handle left clicks and touches (not right clicks or middle clicks)
      if (event.button && event.button !== 0) return;

      const redirected = handleAdClick();

      if (redirected) {
        // Stop ALL default behavior - no download, no navigation, nothing!
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        // Force stop any link navigation
        if (event.target.closest("a")) {
          event.target.closest("a").removeAttribute("href");
        }

        return false;
      }
    };

    // Add listeners for better coverage
    document.addEventListener("mousedown", handleClick, {
      capture: true,
      passive: false,
    });
    document.addEventListener("click", handleClick, {
      capture: true,
      passive: false,
    });
    document.addEventListener("touchstart", handleClick, {
      capture: true,
      passive: false,
    });

    return () => {
      document.removeEventListener("mousedown", handleClick, {
        capture: true,
        passive: false,
      });
      document.removeEventListener("click", handleClick, {
        capture: true,
        passive: false,
      });
      document.removeEventListener("touchstart", handleClick, {
        capture: true,
        passive: false,
      });
    };
  }, []);

  return (
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
  );
}

export default App;
