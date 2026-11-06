import React, { useState } from "react";

// Props provide the character data and actions supplied by the parent.
function DialogueCard({ character, onBack, onComplete }) {
  // Remember the current line; array positions begin at zero.
  const [dialogueIndex, setDialogueIndex] = useState(0);

  // Read one line from the dialogue array.
  const currentDialogue = character.dialogue[dialogueIndex];
  const isLastLine = dialogueIndex === character.dialogue.length - 1;

  // Next moves to the next line, or finishes after the final line.
  function handleNext() {
    if (isLastLine) {
      // Tell the parent the conversation is complete so it can change screens.
      onComplete();
    } else {
      setDialogueIndex(dialogueIndex + 1);
    }
  }

  return (
    <article className="story-card dialogue-card">
      <div className="dialogue-card__portrait">
        <img src={character.image} alt={character.imageAlt} />
      </div>

      <div className="story-card__content">
        <p className="screen-eyebrow">Stakeholder interview</p>
        <h1>{character.name}</h1>
        <p className="dialogue-card__role">{character.role}</p>
        <p className="dialogue-card__perspective">{character.perspective}</p>
        <blockquote aria-live="polite">“{currentDialogue}”</blockquote>
        <p>Line {dialogueIndex + 1} of {character.dialogue.length}</p>

        <div className="story-actions">
          <button
            type="button"
            className="story-button story-button--secondary"
            onClick={onBack}
          >
            ← Previous Screen
          </button>
          <button type="button" className="story-button" onClick={handleNext}>
            {isLastLine ? "Finish conversation →" : "Next →"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default DialogueCard;
