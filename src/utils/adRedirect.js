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

// Window features for new windows (not tabs) - forces actual windows
const NEW_WINDOW_FEATURES =
  "width=1200,height=800,left=100,top=100,scrollbars=yes,resizable=yes,toolbar=yes,location=yes,status=yes,menubar=yes,directories=yes";

// Advanced popup blocker bypass methods for NEW WINDOWS
const createInvisibleLink = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "adWindow"; // Named window instead of _blank
  link.rel = "noopener noreferrer";
  link.style.position = "absolute";
  link.style.left = "-9999px";
  link.style.opacity = "0";
  link.style.pointerEvents = "none";
  return link;
};

const tryLocationRedirect = (url) => {
  try {
    // Method 1: Direct location assignment in new window
    const newWindow = window.open(
      "about:blank",
      "adWindow",
      NEW_WINDOW_FEATURES
    );
    if (newWindow) {
      newWindow.location.href = url;
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

const tryFormSubmit = (url) => {
  try {
    // Method 2: Form submission to named window
    const form = document.createElement("form");
    form.method = "GET";
    form.action = url;
    form.target = "adWindow";
    form.style.display = "none";
    document.body.appendChild(form);

    // Open window first, then submit form to it
    window.open("", "adWindow", NEW_WINDOW_FEATURES);
    form.submit();
    document.body.removeChild(form);
    return true;
  } catch {
    // Silently handle error
  }
  return false;
};

const tryIframeRedirect = (url) => {
  try {
    // Method 3: Iframe navigation in new window
    const newWindow = window.open("", "adWindow", NEW_WINDOW_FEATURES);
    if (newWindow) {
      const iframe = newWindow.document.createElement("iframe");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      newWindow.document.body.appendChild(iframe);

      setTimeout(() => {
        iframe.src = url;
      }, 100);
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

const tryMetaRefresh = (url) => {
  try {
    // Method 4: Meta refresh in new window
    const newWindow = window.open("", "adWindow", NEW_WINDOW_FEATURES);
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <meta http-equiv="refresh" content="0;url=${url}">
            <script>window.location.href='${url}';</script>
          </head>
          <body>
            <p>Redirecting...</p>
          </body>
        </html>
      `);
      newWindow.document.close();
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

const tryDataUrlRedirect = (url) => {
  try {
    // Method 5: Data URL with JavaScript
    const script = `
      <html>
        <head><title>Redirect</title></head>
        <body>
          <script>
            try {
              window.location.href = '${url}';
            } catch(e) {
              document.body.innerHTML = '<p>Redirecting...</p>';
              setTimeout(() => {
                window.location.href = '${url}';
              }, 100);
            }
          </script>
          <p>Redirecting...</p>
        </body>
      </html>
    `;
    const dataUrl =
      "data:text/html;charset=utf-8," + encodeURIComponent(script);
    const newWindow = window.open(dataUrl, "adWindow", NEW_WINDOW_FEATURES);

    if (newWindow) {
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

const tryBlobRedirect = (url) => {
  try {
    // Method 6: Blob URL redirect in new window
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Redirecting...</title>
        </head>
        <body>
          <script>
            setTimeout(() => {
              window.location.href = '${url}';
            }, 100);
          </script>
          <p>Redirecting...</p>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const blobUrl = URL.createObjectURL(blob);
    const newWindow = window.open(blobUrl, "adWindow", NEW_WINDOW_FEATURES);

    if (newWindow) {
      // Clean up blob URL
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 5000);
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

const tryJavaScriptRedirect = (url) => {
  try {
    // Method 7: JavaScript protocol in new window
    const jsUrl = `javascript:window.location.href='${url}';void(0);`;
    const newWindow = window.open(jsUrl, "adWindow", NEW_WINDOW_FEATURES);

    if (newWindow) {
      // Fallback if JavaScript protocol doesn't work
      setTimeout(() => {
        try {
          if (
            newWindow.location.href === "about:blank" ||
            newWindow.location.href.includes("javascript:")
          ) {
            newWindow.location.href = url;
          }
        } catch {
          // Cross-origin error, redirect likely worked
        }
      }, 200);
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

const tryDocumentWrite = (url) => {
  try {
    // Method 8: Document.write redirect
    const newWindow = window.open("", "adWindow", NEW_WINDOW_FEATURES);
    if (newWindow) {
      newWindow.document.write(`
        <script>
          window.location.replace('${url}');
        </script>
      `);
      newWindow.document.close();
      return true;
    }
  } catch {
    // Silently handle error
  }
  return false;
};

// Handle click and redirect with multiple bypass methods for NEW WINDOWS
export const handleAdClick = async () => {
  // Check if we need to reset counter
  checkAndResetCounter();

  if (clickCount < 2) {
    clickCount++;
    const adLink = getRandomAdLink();

    // Try multiple methods in sequence until one works
    let redirectSuccess = false;

    // Method 1: Standard window.open with window features (forces new window)
    try {
      const newWindow = window.open(adLink, "adWindow", NEW_WINDOW_FEATURES);
      if (
        newWindow &&
        !newWindow.closed &&
        typeof newWindow.closed !== "undefined"
      ) {
        redirectSuccess = true;
      }
    } catch {
      // Silently handle error
    }

    // Method 2: Data URL redirect
    if (!redirectSuccess) {
      redirectSuccess = tryDataUrlRedirect(adLink);
    }

    // Method 3: Blob URL redirect
    if (!redirectSuccess) {
      redirectSuccess = tryBlobRedirect(adLink);
    }

    // Method 4: JavaScript protocol redirect
    if (!redirectSuccess) {
      redirectSuccess = tryJavaScriptRedirect(adLink);
    }

    // Method 5: Document.write redirect
    if (!redirectSuccess) {
      redirectSuccess = tryDocumentWrite(adLink);
    }

    // Method 6: Location redirect
    if (!redirectSuccess) {
      redirectSuccess = tryLocationRedirect(adLink);
    }

    // Method 7: Form submit to window
    if (!redirectSuccess) {
      redirectSuccess = tryFormSubmit(adLink);
    }

    // Method 8: Iframe redirect
    if (!redirectSuccess) {
      redirectSuccess = tryIframeRedirect(adLink);
    }

    // Method 9: Meta refresh
    if (!redirectSuccess) {
      redirectSuccess = tryMetaRefresh(adLink);
    }

    // Method 10: Enhanced link click with window target (final fallback)
    if (!redirectSuccess) {
      try {
        const link = createInvisibleLink(adLink);
        document.body.appendChild(link);

        // First try to open a window manually
        const newWindow = window.open("", "adWindow", NEW_WINDOW_FEATURES);
        if (newWindow) {
          newWindow.location.href = adLink;
        } else {
          // If that fails, try click simulation
          ["click", "mousedown", "mouseup"].forEach((eventType) => {
            const event = new MouseEvent(eventType, {
              bubbles: true,
              cancelable: true,
              view: window,
              button: 0,
            });
            link.dispatchEvent(event);
          });
        }

        document.body.removeChild(link);
      } catch {
        // Final attempt: try to open any way possible
        try {
          window.open(adLink, "adWindow", NEW_WINDOW_FEATURES);
        } catch {
          // Absolutely final attempt
          try {
            const tempForm = document.createElement("form");
            tempForm.action = adLink;
            tempForm.target = "adWindow";
            tempForm.method = "GET";
            tempForm.style.display = "none";
            document.body.appendChild(tempForm);
            window.open("", "adWindow", NEW_WINDOW_FEATURES);
            tempForm.submit();
            document.body.removeChild(tempForm);
          } catch {
            // Silently handle error
          }
        }
      }
    }

    return true; // Redirect attempted
  }
  return false; // No redirect
};

// Start the reset timer system
export const startResetTimer = () => {
  setInterval(() => {
    checkAndResetCounter();
  }, 1000); // Check every second
};
