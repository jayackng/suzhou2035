// useState lets a component remember a value that can change.
import React, { useState } from "react";
import "./App.css";
// Imports bring our four smaller components into App.
import Header from "./components/Header";
import Menu from "./components/Menu";
import AboutModal from "./components/AboutModal";
import CityIllustration from "./components/CityIllustration";

// App assembles the page and owns its one piece of state.
function App() {
  // isAboutOpen remembers whether the About modal should be visible.
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // This event handler demonstrates a simple JavaScript alert.
  function handleStartGame() {
    alert("Game will begin in the next lesson!");
  }

  return (
    <>
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
              onStartGame={handleStartGame}
              onOpenAbout={() => setIsAboutOpen(true)}
            />

            <p className="menu-panel__lesson">CLASS 02 · REACT FUNDAMENTALS</p>
          </div>
        </section>
      </main>

      {/* Conditional rendering: the modal exists only when this value is true. */}
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

// export default makes this top-level component available to main.jsx.
export default App;