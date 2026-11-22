import React from "react";

// The parent owns the selection; this component displays it and sends actions back.
// CLASS 8: Heading text, the card glyph and the back-button name arrive through props.
function PolicyDecision({ decision, choices, lastCharacterName, selectedPolicy, onSelect, onConfirm, onBack }) {
  return (
    <article className="policy-desk">
      <header className="policy-desk__heading">
        <p className="screen-eyebrow">{decision.eyebrow}</p>
        <h1>{decision.heading}</h1>
        <p>{decision.intro}</p>
      </header>

      <div className="policy-hand" role="group" aria-label="Policy proposals">
        {/* Create one card for each policy in the chapter data. */}
        {choices.map((choice, index) => (
          <button
            key={choice.id}
            type="button"
            className="policy-playing-card"
            aria-pressed={selectedPolicy?.id === choice.id}
            // Send the chosen policy object back to the parent.
            onClick={() => onSelect(choice)}
          >
            <span className="policy-card__top"><span>0{index + 1}</span><span>{choice.priority}</span><span>{decision.glyph}</span></span>
            <span className="policy-card__art"><img src={choice.image} alt="" /></span>
            <span className="policy-card__title">{choice.title}</span>
            <span className="policy-card__description">{choice.description}</span>
            <span className="policy-card__tradeoff"><strong>The trade-off</strong>{choice.tradeoff}</span>
            <span className="policy-card__pick">{selectedPolicy?.id === choice.id ? "✓ Selected decree" : "Choose this decree"}</span>
          </button>
        ))}
      </div>

      <div className="policy-signing">
        <p aria-live="polite">{selectedPolicy ? `Ready to sign: ${selectedPolicy.title}` : "Choose a card to prepare your decree."}</p>

        {/* A policy must be selected before it can be signed. */}
        <button type="button" className="story-button" disabled={!selectedPolicy} onClick={onConfirm}>Sign decree →</button>
      </div>

      <button type="button" className="text-button policy-back" onClick={onBack}>← Hear {lastCharacterName} again</button>
    </article>
  );
}

export default PolicyDecision;
