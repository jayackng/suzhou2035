// React is imported because this component uses JSX.
import React from "react";

// This component creates the full-screen background layer.
// The image itself is applied in App.css with background-image.
function CityIllustration() {
  return (
    <div
      className="city-background"
      role="img"
      aria-label="Watercolor view of Suzhou with traditional buildings, a bridge, and a canal"
    >
    </div>
  );
}

// This export makes CityIllustration available to App.jsx.
export default CityIllustration;
