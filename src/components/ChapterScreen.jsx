// Import React and the useState Hook.
// useState lets this component remember its own local screen state.
import React, { useState } from "react";

// Import the reusable UI components shown inside every chapter.
import ReportCard from "./ReportCard";
import StatusMeters from "./StatusMeters";
import CanalScene from "./CanalScene";
import DialogueCard from "./DialogueCard";
import PolicyDecision from "./PolicyDecision";
import PolicyResult from "./PolicyResult";

// CLASS 8: These are the screens every chapter shows, in order.
const steps = ["report", "scene", "interview0", "interview1", "decision"];

// CLASS 8: ChapterOne became ChapterScreen. It no longer owns any chapter content or meter data.
// chapter       - the content object from chapterN.js
// meters        - the shared city values owned by App
// onApplyPolicy - asks App to apply the signed policy to the shared meters
// onRestoreMeters - asks App to put the meters back to a saved baseline
// onNextChapter - asks App to open the next chapter
// onBack        - asks App to return to the Chapter Hub
function ChapterScreen({
  chapter,
  meters,
  isLastChapter,
  onApplyPolicy,
  onRestoreMeters,
  onNextChapter,
  onBack,
}) {
  // CLASS 8: LOCAL state belongs only to this chapter.
  const [currentStep, setCurrentStep] = useState("report");
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isPolicyConfirmed, setIsPolicyConfirmed] = useState(false);

  // CLASS 8: Remember the meters at the moment this chapter opened.
  // The lazy form of useState keeps this first value even after App updates meters.
  const [chapterStartMeters] = useState(() => meters);

  // The two interviews come from chapter.characters by index.
  const characterIndex = currentStep === "interview1" ? 1 : 0;
  const stepNumber = String(steps.indexOf(currentStep) + 1).padStart(2, "0");

  function handlePolicySelect(policy) {
    if (isPolicyConfirmed) return;
    setSelectedPolicy(policy);
  }

  function handlePolicyConfirm() {
    if (!selectedPolicy || isPolicyConfirmed) return;
    // CLASS 8: The child asks the parent to change the shared meters.
    onApplyPolicy(selectedPolicy);
    setIsPolicyConfirmed(true);
  }

  // CLASS 8: Restart resets this chapter only; earlier chapters keep their results.
  function handleRestart() {
    onRestoreMeters(chapterStartMeters);
    setSelectedPolicy(null);
    setIsPolicyConfirmed(false);
    setCurrentStep("report");
  }

  // CLASS 8: Leaving after signing but before Continue means the chapter is not finished,
  // so the meters go back to where this chapter started.
  function handleBack() {
    if (isPolicyConfirmed) {
      onRestoreMeters(chapterStartMeters);
    }
    onBack();
  }

  return (
    <main className={`chapter-screen chapter-screen--dark${isPolicyConfirmed ? " chapter-screen--result" : ""}`}>
      <header className="game-topbar">
        <button type="button" className="text-button" onClick={handleBack}>
          ← Chapter Hub
        </button>

        {/* The chapter number and title come from data, so every chapter reuses this bar. */}
        <p>
          CHAPTER {chapter.id} · {chapter.title.toUpperCase()}
        </p>

        <span className="game-topbar__progress">{stepNumber} / 05</span>
      </header>

      {/* The meters come from App, so they stay the same across chapters. */}
      <StatusMeters meters={meters} />

      <section
        key={isPolicyConfirmed ? "result" : "story"}
        className={`chapter-stage${currentStep === "decision" ? " chapter-stage--policy" : ""}`}
      >
        {currentStep === "report" && (
          <ReportCard
            report={chapter.report}
            chapterNumber={chapter.id}
            chapterTitle={chapter.title}
            sceneTitle={chapter.scene.title}
            onContinue={() => setCurrentStep("scene")}
          />
        )}

        {currentStep === "scene" && (
          <CanalScene
            scene={chapter.scene}
            nextName={chapter.characters[0].name}
            onBack={() => setCurrentStep("report")}
            onContinue={() => setCurrentStep("interview0")}
          />
        )}

        {/* A new key restarts each interview at line zero. */}
        {(currentStep === "interview0" || currentStep === "interview1") && (
          <DialogueCard
            key={currentStep}
            character={chapter.characters[characterIndex]}
            onBack={() => setCurrentStep(characterIndex === 0 ? "scene" : "interview0")}
            onComplete={() => setCurrentStep(characterIndex === 0 ? "interview1" : "decision")}
          />
        )}

        {currentStep === "decision" && !isPolicyConfirmed && (
          <PolicyDecision
            decision={chapter.decision}
            choices={chapter.policies}
            lastCharacterName={chapter.characters[1].name}
            selectedPolicy={selectedPolicy}
            onSelect={handlePolicySelect}
            onConfirm={handlePolicyConfirm}
            onBack={() => setCurrentStep("interview1")}
          />
        )}

        {currentStep === "decision" && isPolicyConfirmed && (
          <PolicyResult
            policy={selectedPolicy}
            before={chapterStartMeters}
            after={meters}
            isLastChapter={isLastChapter}
            onRestart={handleRestart}
            onNextChapter={onNextChapter}
          />
        )}
      </section>
    </main>
  );
}

export default ChapterScreen;
