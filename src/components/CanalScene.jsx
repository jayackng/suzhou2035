// Import React so this component can return JSX.
import React from "react";

// Receive scene data and two navigation functions through props.
function CanalScene({ scene, onBack, onContinue }) {
  // Return the complete field-visit screen.
  return (
    // Reuse the shared story-card style and add a scene-specific class.
    <article className="story-card scene-card">
      {/* This container holds the large scene image and its caption. */}
      <div className="scene-card__image">
        {/* Read the image path and alt text from the scene data object. */}
        <img src={scene.image} alt={scene.imageAlt} />

        {/* The caption tells the player where this field visit takes place. */}
        <span className="scene-card__caption">Field visit · Shantang Canal</span>
      </div>

      {/* This container holds the scene text and navigation buttons. */}
      <div className="story-card__content">
        {/* Insert the location label from chapter1.js. */}
        <p className="screen-eyebrow">{scene.location}</p>

        {/* Insert the scene title from chapter1.js. */}
        <h1>{scene.title}</h1>

        {/* Insert the player's field observation from chapter1.js. */}
        <p className="scene-card__observation">{scene.observation}</p>

        {/* Group the two navigation buttons together. */}
        <div className="story-actions">
          {/* Run the onBack callback supplied by ChapterOne. */}
          <button
            type="button"
            className="story-button story-button--secondary"
            onClick={onBack}
          >
            ← Back to Report
          </button>

          {/* Run the onContinue callback supplied by ChapterOne. */}
          <button type="button" className="story-button" onClick={onContinue}>
            Continue to Mr. Feng →
          </button>
        </div>
      </div>
    </article>
  );
}

// Export CanalScene so ChapterOne can render it.
export default CanalScene;
