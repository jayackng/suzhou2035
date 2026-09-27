// Import React so this component can return JSX.
import React from "react";

// Receive report content and a navigation function through props.
function ReportCard({ report, onContinue }) {
  // Return the report and mission layouts as one screen.
  return (
    // report-layout places the report beside the mission card.
    <section className="report-layout">
      {/* The main report card displays content from chapter1Report. */}
      <article className="report-card">
        {/* Group the government label, title, and year in the report header. */}
        <div className="report-card__heading">
          <div>
            {/* This agency label belongs to the visual report template. */}
            <p>SUZHOU MUNICIPAL GOVERNMENT</p>

            {/* Insert the report title supplied through props. */}
            <h1>{report.title}</h1>
          </div>

          {/* Display the game's target year. */}
          <span>2035</span>
        </div>

        {/* Insert the report summary supplied through props. */}
        <p className="report-card__summary">{report.summary}</p>

        {/* Hold the repeated report findings. */}
        <div className="report-findings">
          {/* Create one finding block for each object in report.findings. */}
          {report.findings.map((finding) => (
            // key gives React a stable identity for this repeated item.
            <div key={finding.label}>
              {/* Display the finding's main label. */}
              <strong>{finding.label}</strong>

              {/* Display the finding's supporting explanation. */}
              <span>{finding.text}</span>
            </div>
          ))}
        </div>

        {/* Display the advisor note at the bottom of the report. */}
        <aside className="report-note">
          {/* This label identifies the type of note. */}
          <span>Advisor's note</span>

          {/* Insert the full note supplied through props. */}
          {report.note}
        </aside>
      </article>

      {/* The mission card explains the player's task and next action. */}
      <aside className="mission-card">
        {/* Display the current chapter number. */}
        <p className="screen-eyebrow">Chapter 01</p>

        {/* Display the chapter theme. */}
        <h2>Water & Environment</h2>

        {/* Explain what the player should do before leaving the report. */}
        <p>
          Your first task is to review the report before beginning the field
          investigation.
        </p>

        {/* Run the onContinue callback supplied by ChapterOne. */}
        <button type="button" onClick={onContinue}>
          Visit Shantang Canal →
        </button>
      </aside>
    </section>
  );
}

// Export ReportCard so ChapterOne can render it.
export default ReportCard;
