import React, { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import AboutModal from "./components/AboutModal";
import CityIllustration from "./components/CityIllustration";

import ChapterHub from "./components/ChapterHub";
import ChapterOne from "./components/ChapterOne";

function App() {
  // Remember whether the About window is open.
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Remember which main screen to show, starting with Home.
  const [currentScreen, setCurrentScreen] = useState("home");

  // Updating state makes React display the matching screen below.
  function showScreen(screenName) {
    setCurrentScreen(screenName);
  }

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

              {/* Pass actions as props so menu buttons can change parent state. */}
              <Menu
                startButtonText="Start Game"
                aboutButtonText="About"
                onStartGame={() => showScreen("chapterHub")}
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
          onBack={() => showScreen("home")}
          onSelectChapter={() => showScreen("chapter1")}
        />
      )}

      {currentScreen === "chapter1" && (
        <ChapterOne onBack={() => showScreen("chapterHub")} />
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

export default App;
