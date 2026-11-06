import React from "react";

// The parent owns the selection; this component displays it and sends actions back.
function PolicyDecision({ choices, selectedPolicy, isConfirmed, onSelect, onConfirm, onEdit, onBack }) {
  return (
    <article className="policy-desk">
      <header className="policy-desk__heading">
        <p className="screen-eyebrow">Suzhou · Council chamber</p>
        <h1>The canal's next chapter</h1>
        <p>Three proposals. Compare the cards, then sign your decree.</p>
      </header>
      {isConfirmed ? (
        <section className="policy-decree" aria-label="Policy decree">
          <p className="screen-eyebrow">Decision recorded</p>
          <div className="policy-seal" aria-hidden="true">✓</div>
          <h2>{selectedPolicy.title}</h2>
          <p>{selectedPolicy.description}</p>
          <p>{selectedPolicy.tradeoff}</p>
          <p role="status">Your decree is recorded for this chapter session.</p>
          <button type="button" className="story-button" onClick={onEdit}>Reconsider decree</button>
        </section>
      ) : (
        <>
          <div className="policy-hand" role="group" aria-label="Policy proposals">

            {/* Create one card for each policy in the data array. */}
            {choices.map((choice, index) => (
              <button
                key={choice.id}
                type="button"
                className="policy-playing-card"
                aria-pressed={selectedPolicy?.id === choice.id}

                // Send the chosen policy object back to the parent.
                onClick={() => onSelect(choice)}
              >
                <span className="policy-card__top"><span>0{index + 1}</span><span>{choice.priority}</span><span>水</span></span>
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

            {/* A policy must be selected before it can be confirmed. */}
            <button type="button" className="story-button" disabled={!selectedPolicy} onClick={onConfirm}>Sign decree →</button>
          </div>
        </>
      )}
      <button type="button" className="text-button policy-back" onClick={onBack}>← Hear Auntie Lin again</button>
    </article>
  );
}

export default PolicyDecision;
