# Suzhou 2035: Game Design Development Log

## Log #1: Concept & Research
**Goal:** Figure out what Suzhou 2035 should actually be before building anything.

**What I Did:** Analyzed Suzerain and Reigns for consequence mechanics. Scoped the five chapters (Water & Environment, Old Town & Heritage, Industry & Innovation, Tourism & Community, Future City). Built an inspiration board of visual and UI references. Wrote a personal reflection connecting the theme to my own experience visiting Suzhou and watching neon signage slowly appear over old canal architecture.

**Reflection:** Suzerain's newspaper system and Reigns' meter system became the two mechanics I wanted to combine, instant visible feedback plus multi-perspective consequence.

---

## Log #2: Structure & Setup
**Goal:** Turn the concept into something buildable.

**What I Did:** Set up Node.js, VS Code, Git, and a GitHub repo. Defined the shared gameplay loop across all five chapters (goal, actions, decision, feedback, components). Designed 8 reusable screen types and sketched them multiple ways, low-fi boxes, then restyled around Suzerain's and Reigns' actual UI patterns, then a hand-drawn version.

---

## Log #3: First Build
**Goal:** Get a real, working version of the game running.

**What I Did:** Built a Vite and React project with all 8 screen types as components and all five chapters' content in a shared data file, plus a four-meter system (Environment, Heritage, Economy, Public Opinion) with a visual glow effect at extremes. Verified it compiled clean.

**Challenges:** Needed the components generic enough for every chapter to reuse without rewriting code.

**Solutions:** Pulled all content, text and image paths, from the shared data file, keeping components untouched by chapter-specific decisions.

---

## Log #4: Chapter 1 Deep Dive & Assets
**Goal:** Take Chapter 1 from planning to fully built and illustrated.

**What I Did:** Wrote the full Water Quality Report, two stakeholder profiles with dialogue (Mr. Feng, Auntie Lin), three policy options, visual references, and a gameplay-thinking table. Cross-checked against the actual class deck's component names and route deltas, then rebuilt the Decision and Feedback wireframes to match. Diagrammed the complete user flow. Produced 12 original illustrated assets, backgrounds, portraits, meter icons, arrows, newspaper masthead, and wired all of them into the actual React components.

**Challenges:** Wanted the evening canal background to visually carry the neon-over-tradition theme from my personal reflection, not just describe it.

**Solutions:** Reused the daytime skyline silhouette, added lantern-colored windows and one neon sign with a canal reflection.

---

## Log #5: Chapter Navigation & DialogueCard
**Goal:** Make Chapter 1 playable start to finish, Report → Canal → Mr. Feng → Auntie Lin, on one screen.

**What I Did:** Added a `currentStep` state in `ChapterOne` to switch screens without a router. Built `CanalScene`, and one shared `DialogueCard` that both Mr. Feng and Auntie Lin reuse by passing in a character object. Moved all of Chapter 1's text and starting meters into the data file, and added the real canal/portrait images.

**Challenges:** Keeping `DialogueCard` generic instead of hardcoding logic per character.

**Solutions:** Put every character difference in the data file's `characters` object, and passed a boolean prop down instead of checking for Auntie Lin by name.

**Reflection:** The data/component split kept paying off, most of the work was in the data file, not new UI. Next: `dialogueIndex` for multi-line dialogue.

---

## Log #6: Policy Decision & Finishing Chapter 1
**Goal:** Let the player compare three policy cards and sign a decree, finishing Chapter 1's first playable loop.

**What I Did:** Built `PolicyDecision`, which shows three policy cards (approve, approve with conditions, pause) as buttons. Clicking one sends the chosen policy object back up to `ChapterOne` through an `onSelect` prop. `ChapterOne` holds the selection in state (`selectedPolicy`) and passes it back down, so the card screen can show the signed decree.

**Code snippet:**
```jsx
function PolicyDecision({ choices, selectedPolicy, onSelect, onConfirm }) {
  return choices.map((choice) => (
    <button key={choice.id} onClick={() => onSelect(choice)}>
      {choice.title}
    </button>
  ));
}
```
State lives in the parent (`selectedPolicy`), `choices` and the callback come in as props, and `onSelect` is the callback the child calls to hand its click back up. The card component never needs to know what "selecting a policy" actually does.

**Challenges:** Re-entering Mr. Feng or Auntie Lin's conversation after finishing it kept the old dialogue line instead of starting over.

**Solutions:** Added `key={currentStep}` on `DialogueCard` in `ChapterOne`. A new key tells React to treat it as a brand new component instance, so its internal `dialogueIndex` resets to 0 automatically.

**Improvement for next time:** Confirming a decree doesn't move any of the four meters yet. Each policy should push Environment, Economy, Heritage and Public up or down.

---

## Log #7: Policy Effects & Results
**Goal:** Make decisions matter by letting a signed policy change the city's four meters and show the outcome.

**What I Did:** Moved the meters into `ChapterOne` state with `useState(startingMeters)`. Each policy in the data file now has an `effects` object and a `result` headline and summary. A helper, `applyPolicyEffects`, adds the effects to the meters and clamps each one between 0 and 100. After signing, a new `PolicyResult` screen shows the headline plus a before → after list for every meter, and a Restart button resets everything.

**Code snippet:**
```jsx
function handlePolicyConfirm() {
  if (!selectedPolicy || isPolicyConfirmed) return;
  setMeters((previous) => applyPolicyEffects(previous, selectedPolicy.effects));
  setIsPolicyConfirmed(true);
}
```
State (`meters`) lives in the parent. `StatusMeters` and `PolicyResult` receive the values as props and never change them. The child calls the `onConfirm` callback, and the parent does the update, so every screen always shows the same numbers.

**Challenges:** A player could sign a decree more than once, or re-select a card after signing, and the effects would stack. My first push also left out a component file and the image folder, so the build failed on GitHub.

**Solutions:** `handlePolicyConfirm` returns early if a decree is already confirmed, and `handlePolicySelect` ignores clicks after confirmation. `applyPolicyEffects` builds a new array, so `startingMeters` stays intact and Restart can restore it. For the push, I checked a fresh clone of the repo, found the missing files, and pushed them.

**Improvement for next time:** Heritage doesn't change in Chapter 1. Later chapters should have policies that affect all four meters, and the game should carry the final meter values into Chapter 2 instead of resetting.

---

## Log #8: Reusable ChapterScreen & Shared Game State
**Goal:** Turn the one-off Chapter 1 screen into a reusable ChapterScreen so every chapter shares one framework, and carry the city meters from chapter to chapter.

**What I Did:** Renamed `ChapterOne` to `ChapterScreen` and removed every hard-coded Chapter 1 detail from it. Each chapter now lives in its own data file (`chapter1.js`, `chapter2.js`, `chapter3.js`) with the same shape: `report`, `scene`, `characters` (an array of two), `decision` and `policies`. `gameChapters.js` imports them all into one array. I moved the four meters up into `App`, so they belong to the whole game instead of one chapter. I wrote Chapter 2 (Old Town & Heritage) and Chapter 3 (Industry & Innovation) with the same structure, and the Chapter Hub now shows finished chapters as completed and locks the ones ahead.

**Shared state vs. local state:** Shared state lives in `App`: the `meters` and `currentChapterIndex`. Local state lives in `ChapterScreen`: `currentStep`, `selectedPolicy`, `isPolicyConfirmed` and the meters from the moment the chapter opened. Only `App` changes the meters, and `ChapterScreen` asks it to through callbacks.

**Code excerpt (CLASS 8):**
```jsx
// App.jsx: shared state and the callbacks that change it
const [meters, setMeters] = useState(initialMeters);
const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

function handleApplyPolicy(policy) {
  setMeters((previous) => applyPolicyEffects(previous, policy.effects));
}
function handleRestoreMeters(baselineMeters) {
  setMeters(baselineMeters);
}

<ChapterScreen
  key={currentChapterIndex}
  chapter={gameChapters[currentChapterIndex]}
  meters={meters}
  onApplyPolicy={handleApplyPolicy}
  onRestoreMeters={handleRestoreMeters}
  onNextChapter={() => setCurrentChapterIndex((i) => i + 1)}
/>
```
The `key={currentChapterIndex}` gives each chapter a fresh local state, so Chapter 2 opens on its report screen with no policy selected, while the meters carry over because they live in `App`.

**Challenges:** If a player signed a decree and then clicked "Chapter Hub" instead of Continue, the meters kept the decree's changes. Coming back and signing again would have stacked the effects on top.

**Solutions:** `ChapterScreen` remembers the meters from when the chapter opened (`useState(() => meters)`). Leaving the chapter after signing, or pressing Restart, calls `onRestoreMeters` with that saved baseline, so only the current chapter resets and earlier chapters keep their results.

**Improvement for next time:** Add the Resume logic so the hub can return a player to the exact screen they left. Right now going back to the hub restarts that chapter from its report. I also want to replace the placeholder images in Chapters 2 and 3 with my own artwork.
