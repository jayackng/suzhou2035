// React is imported because this component uses JSX.
import React from "react";

// AboutModal receives its content and close function through props.
function AboutModal({ title, description, onClose }) {
  return (
    <div className="modal-backdrop">
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
      >
        <h2 id="about-title">{title}</h2>
        <p>{description}</p>

        {/* Clicking this button asks App to close the modal. */}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  );
}

// This export makes AboutModal available to App.jsx.
export default AboutModal;
