// React is imported because this component uses JSX.
import React from "react";

// Menu receives button labels and event functions through props.
function Menu({
  startButtonText,
  aboutButtonText,
  onStartGame,
  onOpenAbout,
}) {
  return (
    <nav className="menu" aria-label="Main menu">
      {/* onClick connects a button click to a JavaScript function. */}
      <button
        type="button"
        className="menu__button menu__button--primary"
        onClick={onStartGame}
      >
        <span>{startButtonText}</span>
        <span aria-hidden="true">→</span>
      </button>

      <button type="button" className="menu__button" onClick={onOpenAbout}>
        <span>{aboutButtonText}</span>
        <span aria-hidden="true">i</span>
      </button>
    </nav>
  );
}

// This export makes Menu available to App.jsx.
export default Menu;
