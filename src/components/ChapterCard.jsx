import React from "react";

// One reusable card can display any chapter object from chapters.js.
function ChapterCard({ chapter, onSelect }) {
  return (
    // The available value controls the card's style, click, and disabled state.
    <button
      type="button"
      className={`chapter-card ${chapter.available ? "" : "chapter-card--locked"}`}
      onClick={chapter.available ? onSelect : undefined}
      disabled={!chapter.available}
    >
      <span className="chapter-card__number">
        {/* padStart turns 1 into 01 so every chapter number has two digits. */}
        {String(chapter.id).padStart(2, "0")}
      </span>

      <span className="chapter-card__content">
        <strong>{chapter.title}</strong>
        <small>{chapter.description}</small>
      </span>

      <span className="chapter-card__status">
        {chapter.available ? "Begin →" : "Locked"}
      </span>
    </button>
  );
}

export default ChapterCard;