// React is imported because this component uses JSX.
import React from "react";

// Props let App send the title and subtitle into this component.
function Header({ title, subtitle }) {
  return (
    <header className="header">
      {/* JSX looks like HTML, but it is written inside JavaScript. */}
      <p className="header__eyebrow">A city shaped by choices</p>
      <h1>
        {title}
        <span>2035</span>
      </h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  );
}

// export default lets App.jsx import and reuse Header.
export default Header;
