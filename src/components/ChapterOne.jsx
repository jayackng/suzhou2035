// Import React and the useState Hook.
// useState lets this component remember the player's current story screen.
import React, { useState } from "react";

// Import the four reusable UI components shown inside Chapter 1.
import ReportCard from "./ReportCard";
import StatusMeters from "./StatusMeters";
import CanalScene from "./CanalScene";
import DialogueCard from "./DialogueCard";

// Import Chapter 1 content from the data file.
// This keeps story writing and meter values outside the UI component.
import {
  canalScene,
  chapter1Report,
  characters,
  startingMeters,
} from "../data/chapter1";

// Match each state value with the progress number shown in the top bar.
const stepNumbers = {
  report: "01",
  canal: "02",
  feng: "03",
  lin: "04",
};

// ChapterOne receives onBack from its parent component.
// Calling onBack returns the player to the Chapter Hub.
function ChapterOne({ onBack }) {

  const [currentStep, setCurrentStep] = useState("report");

  // Return the complete Chapter 1 interface.
  return (
    // This <main> wraps every part of the Chapter 1 screen.
    <main className="chapter-screen chapter-screen--dark">
      {/* The top bar stays visible while the story screen changes. */}
      <header className="game-topbar">
        {/* This button uses the onBack prop to return to the Chapter Hub. */}
        <button type="button" className="text-button" onClick={onBack}>
          ← Chapter Hub
        </button>

        {/* This label tells the player which chapter is open. */}
        <p>CHAPTER 1 · WATER &amp; ENVIRONMENT</p>

        {/* Look up the progress number that matches currentStep. */}
        <span className="game-topbar__progress">
          {stepNumbers[currentStep]} / 04
        </span>
      </header>

      {/*
        StatusMeters sits outside the conditions below.
        It therefore stays visible on every Chapter 1 story screen.
      */}
      <StatusMeters meters={startingMeters} />

      {/* This section is the area where the active story screen appears. */}
      <section className="chapter-stage">
        {/* Show ReportCard only when currentStep equals "report". */}
        {currentStep === "report" && (
          /*
            report supplies the content.
            onContinue changes the next screen to the canal.
          */
          <ReportCard
            report={chapter1Report}
            onContinue={() => setCurrentStep("canal")}
          />
        )}

        {/* Show CanalScene only when currentStep equals "canal". */}
        {currentStep === "canal" && (
          /*
            scene supplies the canal content.
            The callbacks move backward to the report or forward to Mr. Feng.
          */
          <CanalScene
            scene={canalScene}
            onBack={() => setCurrentStep("report")}
            onContinue={() => setCurrentStep("feng")}
          />
        )}

        {/* Show DialogueCard with Mr. Feng's data on the "feng" step. */}
        {currentStep === "feng" && (
          /*
            character selects Mr. Feng's content.
            The callbacks move backward to the canal or forward to Auntie Lin.
          */
          <DialogueCard
            character={characters.feng}
            onBack={() => setCurrentStep("canal")}
            onContinue={() => setCurrentStep("lin")}
          />
        )}

        {/* Show the same DialogueCard with Auntie Lin's data on the "lin" step. */}
        {currentStep === "lin" && (
          /*
            character now selects Auntie Lin's content.
            isLastClassFiveStep replaces Continue with a disabled placeholder.
          */
          <DialogueCard
            character={characters.lin}
            onBack={() => setCurrentStep("feng")}
            isLastClassFiveStep
          />
        )}
      </section>

      {/* TODO Class 6: use dialogueIndex for conversations with multiple lines. */}
      {/* TODO Classes 7–8: add policy decisions, changing meters, and news. */}
    </main>
  );
}

// Export the component so App.jsx or another parent can render it.
export default ChapterOne;
