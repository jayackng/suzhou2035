import React from "react";

// CLASS 7: This reusable result reads data through props and sends restart to the parent.
function PolicyResult({ policy, before, after, onRestart }) {
  return (
    <article className="policy-desk">
      <section className="policy-decree policy-result" aria-label="Policy result">
        <p className="screen-eyebrow">Suzhou Dispatch · Council decision</p>
        <h1>{policy.result.headline}</h1>
        <p>{policy.result.summary}</p>
        <p className="policy-result__choice">Signed decree: {policy.title}</p>
        <h2>City impact</h2>
        <ul className="policy-result__changes" aria-label="City status changes">
          {/* CLASS 7: Show actual changes after the 0–100 limits are applied. */}
          {after.map((meter) => {
            const previous = before.find((item) => item.name === meter.name).value;
            const change = meter.value - previous;
            return (
              <li key={meter.name}>
                <span>{meter.name}</span>
                <span>{previous} → {meter.value}</span>
                <strong>{change === 0 ? "Unchanged" : `${change > 0 ? "+" : ""}${change}`}</strong>
              </li>
            );
          })}
        </ul>
        <p role="status">Your decree has taken effect. Restart to explore another policy.</p>
        <button type="button" className="story-button" onClick={onRestart}>Restart chapter →</button>
      </section>
    </article>
  );
}

export default PolicyResult;
