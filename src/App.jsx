// Import React and useState.
// useState lets a component remember a value that can change.
import React, { useState } from "react";

// Import the components used on the Home screen.
import Header from "./components/Header";
import Menu from "./components/Menu";
import AboutModal from "./components/AboutModal";
import CityIllustration from "./components/CityIllustration";

// Import the two game screens that appear after Home.
import ChapterHub from "./components/ChapterHub";
import ChapterOne from "./components/ChapterOne";

// App is the top-level component and controls navigation between major screens.
function App() {
  // isAboutOpen remembers whether the About modal should be visible.
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // currentScreen controls our simple game flow without React Router.
  // "home" is the initial value, so the Home screen appears first.
  const [currentScreen, setCurrentScreen] = useState("home");

  // Receive a screen name such as "home", "chapterHub", or "chapter1".
  function showScreen(screenName) {
    // Save the new name and make React render the matching screen.
    setCurrentScreen(screenName);
  }

  // Return every possible App-level screen.
  return (
    // A Fragment groups multiple conditional screens without adding a new div.
    <>
      {/* Render the Home screen only when currentScreen equals "home". */}
      {currentScreen === "home" && (
        // game-shell contains the illustration and the menu panel.
        <main className="game-shell">
          {/* Display the existing Suzhou city illustration. */}
          <CityIllustration />

          {/* Place the title and menu inside the right-hand panel. */}
          <section className="menu-panel">
            <div className="menu-panel__content">
              {/* Pass the Home screen title and subtitle into Header. */}
              <Header
                title="SUZHOU"
                subtitle="A Narrative Strategy Experience"
              />

              {/*
                Start Game changes currentScreen to "chapterHub".
                About changes isAboutOpen to true.
              */}
              <Menu
                startButtonText="Start Game"
                aboutButtonText="About"
                onStartGame={() => showScreen("chapterHub")}
                onOpenAbout={() => setIsAboutOpen(true)}
              />

              {/* Show the current class milestone below the menu. */}
              <p className="menu-panel__lesson">
                CLASS 05 · BUILDING THE NAVIGATION SYSTEM
              </p>
            </div>
          </section>
        </main>
      )}

      {/* Render ChapterHub only when currentScreen equals "chapterHub". */}
      {currentScreen === "chapterHub" && (
        /*
          onBack returns to Home.
          onSelectChapter opens Chapter 1.
        */
        <ChapterHub
          onBack={() => showScreen("home")}
          onSelectChapter={() => showScreen("chapter1")}
        />
      )}

      {/* Render ChapterOne only when currentScreen equals "chapter1". */}
      {currentScreen === "chapter1" && (
        // Pass a callback that lets ChapterOne return to the Chapter Hub.
        <ChapterOne onBack={() => showScreen("chapterHub")} />
      )}

      {/* Render AboutModal only while isAboutOpen is true. */}
      {isAboutOpen && (
        /*
          Pass modal content as props.
          onClose changes isAboutOpen back to false.
        */
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