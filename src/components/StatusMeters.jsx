import React from "react";

// StatusMeters receives an array so the same UI can display any set of values.
function StatusMeters({ meters }) {
  return (
    <section className="status-meters" aria-label="City status">
      {/* map() repeats this meter layout once for each data object. */}
      {meters.map((meter) => (
        <div
          className={`status-meter status-meter--${meter.name.toLowerCase()}`}
          key={meter.name}
        >
          <div className="status-meter__label">
            <span>{meter.name}</span>
            <strong>{meter.value}</strong>
          </div>
          <div className="status-meter__track">
            {/* Inline style converts the number into a percentage bar width. */}
            <div
              className="status-meter__fill"
              style={{ width: `${meter.value}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatusMeters;
