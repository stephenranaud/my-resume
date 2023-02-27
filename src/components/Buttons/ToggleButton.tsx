import { useState } from "react";
import "./ToggleButton.css";

export default function ToggleButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <div
      className={`toggle-button ${active ? "active" : ""}`}
      role="button"
      onClick={handleClick}
    >
      <div className="toggle-circle" aria-hidden="true"></div>
    </div>
  );
}
