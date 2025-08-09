// Adsterra redirect system - Reset every 10 seconds
const ADSTERRA_LINKS = [
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

let clickCount = 0;
let lastResetTime = Date.now();
const RESET_INTERVAL = 10000; // 10 seconds

// Get random ad link
export const getRandomAdLink = () => {
  const randomIndex = Math.floor(Math.random() * ADSTERRA_LINKS.length);
  return ADSTERRA_LINKS[randomIndex];
};

// Check if 10 seconds passed and reset counter
const checkAndResetCounter = () => {
  const currentTime = Date.now();
  if (currentTime - lastResetTime >= RESET_INTERVAL) {
    clickCount = 0; // Reset counter
    lastResetTime = currentTime; // Update reset time
  }
};

// Handle click and redirect
export const handleAdClick = () => {
  // Check if we need to reset counter
  checkAndResetCounter();

  if (clickCount < 2) {
    clickCount++;
    const adLink = getRandomAdLink();

    try {
      // Simple window.open for new TAB (not window)
      const newTab = window.open(adLink, "_blank");

      // Check if popup was blocked
      if (!newTab || newTab.closed || typeof newTab.closed == "undefined") {
        // Fallback: create a temporary link and click it
        const link = document.createElement("a");
        link.href = adLink;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch {
      // Final fallback: create temporary link
      const link = document.createElement("a");
      link.href = adLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    return true; // Redirect happened
  }
  return false; // No redirect
};

// Start the reset timer system
export const startResetTimer = () => {
  setInterval(() => {
    checkAndResetCounter();
  }, 1000); // Check every second
};

// Get current click count (for debugging)
export const getClickCount = () => clickCount;
