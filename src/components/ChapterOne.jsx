// Import React and the useState Hook.
// useState lets this component remember the player's current story screen.
import React, { useState } from "react";

// Import the reusable UI components shown inside Chapter 1.
import ReportCard from "./ReportCard";
import StatusMeters from "./StatusMeters";
import CanalScene from "./CanalScene";
import DialogueCard from "./DialogueCard";
import PolicyDecision from "./PolicyDecision";
import PolicyResult from "./PolicyResult";
import { applyPolicyEffects } from "../data/policyEffects";

// Import Chapter 1 content from the data file.
// This keeps story writing and meter values outside the UI component.
import {
  canalScene,
  chapter1Report,
  characters,
  startingMeters,
  policyChoices,
} from "../data/chapter1";

// Match each state value with the progress number shown in the top bar.
const stepNumbers = {
  // The report is screen 1.
  report: "01",
  // The canal visit is screen 2.
  canal: "02",
  // Mr. Feng's interview is screen 3.
  feng: "03",
  // Auntie Lin's interview is screen 4.
  lin: "04",
  decision: "05",
};

// ChapterOne receives onBack from its parent component.
// Calling onBack returns the player to the Chapter Hub.
function ChapterOne({ onBack }) {
  // currentStep stores the screen that is visible now.
  // setCurrentStep changes that screen after a button click.
  // "report" is the starting value, so the report appears first.
  const [currentStep, setCurrentStep] = useState("report");

  // CLASS 6: Parent state remembers the selected policy and its confirmation.
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isPolicyConfirmed, setIsPolicyConfirmed] = useState(false);

  // CLASS 7: The parent owns changing city values; children receive them as props.
  const [meters, setMeters] = useState(startingMeters);

  function handlePolicySelect(policy) {
    if (isPolicyConfirmed) return;
    setSelectedPolicy(policy);
  }

  function handlePolicyConfirm() {
    // CLASS 7: A signed decree applies once. Selecting a card does not change meters.
    if (!selectedPolicy || isPolicyConfirmed) return;
    // CLASS 7: Use previous state to calculate new values without changing the old array.
    setMeters((previous) => applyPolicyEffects(previous, selectedPolicy.effects));
    setIsPolicyConfirmed(true);
  }

  // CLASS 7: Restart restores both the story and city state for a fresh comparison.
  function handleRestart() {
    setMeters(startingMeters);
    setSelectedPolicy(null);
    setIsPolicyConfirmed(false);
    setCurrentStep("report");
  }

  // Return the complete Chapter 1 interface.
  return (
    // This <main> wraps every part of the Chapter 1 screen.
    <main className={`chapter-screen chapter-screen--dark${isPolicyConfirmed ? " chapter-screen--result" : ""}`}>
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
          {stepNumbers[currentStep]} / 05
        </span>
      </header>

      {/*
        StatusMeters sits outside the conditions below.
        It therefore stays visible on every Chapter 1 story screen.
      */}
      <StatusMeters meters={meters} />

      {/* This section is the area where the active story screen appears. */}
      {/* CLASS 7: A new stage resets scrolling when results appear or the chapter restarts. */}
      <section key={isPolicyConfirmed ? "result" : "story"}
        className={`chapter-stage${currentStep === "decision" ? " chapter-stage--policy" : ""}`}>
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

        {/* CLASS 6: The parent passes character and onComplete as props. */}
        {/* CLASS 6: A new key resets dialogueIndex to 0 when the character changes. */}
        {(currentStep === "feng" || currentStep === "lin") && (
          <DialogueCard
            key={currentStep}
            character={characters[currentStep]}
            onBack={() => setCurrentStep(currentStep === "feng" ? "canal" : "feng")}
            // CLASS 6: When the child finishes, the parent updates currentStep.
            onComplete={() => setCurrentStep(currentStep === "feng" ? "lin" : "decision")}
          />
        )}

        {/* CLASS 7: Props flow down; callbacks let the child update parent state. */}
        {currentStep === "decision" && !isPolicyConfirmed && (
          <PolicyDecision
            choices={policyChoices}
            selectedPolicy={selectedPolicy}
            onSelect={handlePolicySelect}
            onConfirm={handlePolicyConfirm}
            onBack={() => setCurrentStep("lin")}
          />
        )}
        {/* CLASS 7: Confirmation switches to feedback using the same parent state. */}
        {currentStep === "decision" && isPolicyConfirmed && (
          <PolicyResult
            policy={selectedPolicy}
            before={startingMeters}
            after={meters}
            onRestart={handleRestart}
          />
        )}
      </section>
    </main>
  );
}

// Export the component so App.jsx or another parent can render it.
export default ChapterOne;
