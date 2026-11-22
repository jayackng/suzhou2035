import React from "react";
import ChapterCard from "./ChapterCard";

// ChapterHub receives navigation functions from App instead of owning screen state.
// CLASS 8: App now decides which chapters are open, so the list arrives as a prop.
function ChapterHub({ chapters, onBack, onSelectChapter }) {
  return (
    <main className="hub-screen">
      <header className="game-topbar">
        <button type="button" className="text-button" onClick={onBack}>
          ← Home
        </button>
        <p>SUZHOU 2035 · CITY ARCHIVE</p>
      </header>

      <section className="hub-content">
        <p className="screen-eyebrow">Your decisions shape the city</p>
        <h1>Choose a Chapter</h1>
        <p className="screen-intro">
          Begin with Suzhou's waterways. New chapters will become available as
          the story grows.
        </p>

        <div className="chapter-list">
          {/* map() creates one ChapterCard for every object in the data array. */}
          {chapters.map((chapter, index) => (
            /* key helps React identify each card when the list changes. */
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onSelect={() => onSelectChapter(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ChapterHub;
