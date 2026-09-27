// Import React so this file can return JSX.
import React from "react";

// One component displays both characters.
// ChapterOne changes the character prop instead of creating two separate pages.
function DialogueCard({
  // character contains the portrait, name, role, perspective, and dialogue.
  character,
  // onBack is the function that moves to the previous story screen.
  onBack,
  // onContinue is the function that moves to the next story screen.
  onContinue,
  // This optional Boolean is false unless ChapterOne passes it in.
  isLastClassFiveStep = false,
}) {
  // Return one reusable dialogue layout.
  return (
    // <article> groups this character interview as one piece of content.
    <article className="story-card dialogue-card">
      {/* This container controls the portrait area through CSS. */}
      <div className="dialogue-card__portrait">
        {/* Read the image path and accessible description from character data. */}
        <img src={character.image} alt={character.imageAlt} />
      </div>

      {/* This container holds all written character information and buttons. */}
      <div className="story-card__content">
        {/* The eyebrow identifies the type of screen. */}
        <p className="screen-eyebrow">Stakeholder interview</p>

        {/* Insert the selected character's name. */}
        <h1>{character.name}</h1>

        {/* Insert the selected character's role. */}
        <p className="dialogue-card__role">{character.role}</p>

        {/* Insert a short label describing the character's point of view. */}
        <p className="dialogue-card__perspective">{character.perspective}</p>

        {/* Insert one representative dialogue line for Class 5. */}
        <blockquote>“{character.dialogue}”</blockquote>

        {/* Group the navigation buttons so CSS can align them together. */}
        <div className="story-actions">
          {/*
            This button runs onBack after a click.
            type="button" prevents form submission, and the secondary class
            gives the Back button a quieter style.
          */}
          <button
            type="button"
            className="story-button story-button--secondary"
            onClick={onBack}
          >
            ← Previous Screen
          </button>

          {/* Choose which second button to show with a ternary condition. */}
          {isLastClassFiveStep ? (
            // Auntie Lin is the last Class 5 screen, so the next action is disabled.
            <button type="button" className="story-button" disabled>
              Policy Decision · Coming in Class 7
            </button>
          ) : (
            // Mr. Feng is not the last screen, so Continue remains clickable.
            <button type="button" className="story-button" onClick={onContinue}>
              Continue to Auntie Lin →
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

// Export DialogueCard so ChapterOne can import and reuse it.
export default DialogueCard;
