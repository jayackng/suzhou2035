// Import React and useState.
// useState lets a component remember a value that can change.
import React, { useState } from "react";

// Import the components used on the Home screen.
import Header from "./components/Header";
import Menu from "./components/Menu";
import AboutModal from "./components/AboutModal";
import CityIllustration from "./components/CityIllustration";

// Import the game screens that appear after Home.
import ChapterHub from "./components/ChapterHub";
import ChapterScreen from "./components/ChapterScreen";

// CLASS 8: Chapter content and the starting meters come from data files.
import hubChapters from "./data/chapters";
import { gameChapters, initialMeters } from "./data/gameChapters";
import { applyPolicyEffects } from "./data/policyEffects";

// App is the top-level component and owns the SHARED game state.
function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Which main screen is visible: "home", "chapterHub" or "chapter".
  const [currentScreen, setCurrentScreen] = useState("home");

  // CLASS 8: SHARED state. Meters belong to the whole game, not to one chapter.
  const [meters, setMeters] = useState(initialMeters);

  // CLASS 8: SHARED state. Zero-indexed: 0 = Chapter 1, 1 = Chapter 2.
  // It also marks how far the player has progressed.
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  // CLASS 8: A chapter asks App to apply its signed policy to the shared meters.
  function handleApplyPolicy(policy) {
    setMeters((previous) => applyPolicyEffects(previous, policy.effects));
  }

  // CLASS 8: A chapter asks App to restore its baseline. Earlier chapters stay untouched.
  function handleRestoreMeters(baselineMeters) {
    setMeters(baselineMeters);
  }

  // CLASS 8: Continue keeps the meters and moves the game to the next chapter.
  function handleNextChapter() {
    setCurrentChapterIndex((previous) => previous + 1);
  }

  // Build the hub list: finished chapters show "Completed", the current one opens,
  // and everything after it stays locked.
  const hubList = hubChapters.map((chapter, index) => ({
    ...chapter,
    available: index === currentChapterIndex && index < gameChapters.length,
    statusLabel: index < currentChapterIndex ? "Completed ✓" : undefined,
  }));

  const isLastChapter = currentChapterIndex === gameChapters.length - 1;

  return (
    <>
      {currentScreen === "home" && (
        <main className="game-shell">
          <CityIllustration />

          <section className="menu-panel">
            <div className="menu-panel__content">
              <Header
                title="SUZHOU"
                subtitle="A Narrative Strategy Experience"
              />

              <Menu
                startButtonText="Start Game"
                aboutButtonText="About"
                onStartGame={() => setCurrentScreen("chapterHub")}
                onOpenAbout={() => setIsAboutOpen(true)}
              />

              <p className="menu-panel__lesson">
                SUZHOU 2035 · YOUR CITY, YOUR CHOICES
              </p>
            </div>
          </section>
        </main>
      )}

      {currentScreen === "chapterHub" && (
        <ChapterHub
          chapters={hubList}
          onBack={() => setCurrentScreen("home")}
          onSelectChapter={() => setCurrentScreen("chapter")}
        />
      )}

      {/* CLASS 8: One ChapterScreen shows every chapter. */}
      {/* A new key gives each chapter a fresh local state when currentChapterIndex changes. */}
      {currentScreen === "chapter" && (
        <ChapterScreen
          key={currentChapterIndex}
          chapter={gameChapters[currentChapterIndex]}
          meters={meters}
          isLastChapter={isLastChapter}
          onApplyPolicy={handleApplyPolicy}
          onRestoreMeters={handleRestoreMeters}
          onNextChapter={handleNextChapter}
          onBack={() => setCurrentScreen("chapterHub")}
        />
      )}

      {isAboutOpen && (
        <AboutModal
          title="About Suzhou 2035"
          description="Suzhou 2035 is an interactive narrative strategy game. Players return to Suzhou in the year 2035 as a young urban planning advisor. Throughout the game, players will balance economic growth, environmental protection, cultural heritage, tourism, and technological innovation. Every decision changes the future of the city."
          onClose={() => setIsAboutOpen(false)}
        />
      )}
    </>
  );
}

// Export App so main.jsx can render it as the top-level component.
export default App;
