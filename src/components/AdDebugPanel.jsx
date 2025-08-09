import { useState } from "react";
import adRedirectManager from "../utils/adRedirect";

const AdDebugPanel = () => {
  const [status, setStatus] = useState(adRedirectManager.getStatus());

  const updateStatus = () => {
    setStatus(adRedirectManager.getStatus());
  };

  const resetClicks = () => {
    adRedirectManager.resetClickCount();
    updateStatus();
  };

  const testClick = () => {
    adRedirectManager.handleClick();
    updateStatus();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 9999,
        fontSize: "12px",
        border: "1px solid #dc2626",
      }}
    >
      <h4>Ad Debug Panel</h4>
      <p>Click Count: {status.clickCount}</p>
      <p>Should Redirect: {status.shouldRedirect ? "Yes" : "No"}</p>
      <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
        <button
          onClick={updateStatus}
          style={{
            background: "#dc2626",
            color: "white",
            border: "none",
            padding: "2px 5px",
            borderRadius: "3px",
            fontSize: "10px",
          }}
        >
          Refresh
        </button>
        <button
          onClick={resetClicks}
          style={{
            background: "#059669",
            color: "white",
            border: "none",
            padding: "2px 5px",
            borderRadius: "3px",
            fontSize: "10px",
          }}
        >
          Reset
        </button>
        <button
          onClick={testClick}
          style={{
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "2px 5px",
            borderRadius: "3px",
            fontSize: "10px",
          }}
        >
          Test
        </button>
      </div>
    </div>
  );
};

export default AdDebugPanel;
