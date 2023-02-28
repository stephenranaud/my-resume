import { useState } from "react";
import "./ToggleButton.css";

type Theme = "light" | "dark";

export default function ToggleButton() {
  type TypeColorsTheme = keyof typeof colors[Theme];

  const [active, setActive] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    const themeNames = ["light", "dark"] as const;
    let theme: Theme | undefined = "light";

    if ((theme = themeNames.find((t) => localStorage.getItem("theme") === t))) {
      if (theme) {
        return theme;
      }
    }

    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setActive(!active);
      return "dark";
    }

    return "light";
  });

  const colors = {
    dark: {
      darkColorPrimary: "#020c1b",
      colorPrimary: "#0a192f",
      lightColorPrimary: "#112240",
      lightestColorPrimary: "#233554",
    },
    light: {
      darkColorPrimary: "rgba(100, 255, 218, 0.2)",
      colorPrimary: "#233554",
      lightColorPrimary: "transparent",
      lightestColorPrimary: "transparent",
    },
  };

  const handleClick = () => {
    let root = document.documentElement;
    let key: TypeColorsTheme;

    for (key in colors[theme]) {
      const nameCssCustomProperty =
        "--" +
        key.replace(/[a-z]+([A-Z])/g, (stringMatch: string, chr: string) => {
          return (
            stringMatch.slice(0, stringMatch.length - 1) +
            "-" +
            chr.toLocaleLowerCase()
          );
        });

      if (key in colors[theme]) {
        root.style.setProperty(nameCssCustomProperty, colors[theme][key]);
      }
    }

    setTheme((theme) => {
      const t = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", t);
      return t;
    });

    setActive(!active);
  };

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
