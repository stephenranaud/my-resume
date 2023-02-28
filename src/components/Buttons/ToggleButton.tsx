import { useEffect, useState } from "react";
import "./ToggleButton.css";

type Theme = "light" | "dark";

export default function ToggleButton() {
  type TypeColorsTheme = keyof typeof colors[Theme];

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
      lightColorPrimary: "#112240",
      lightestColorPrimary: "transparent",
    },
  };

  const [active, setActive] = useState(() => {
    const themeNames = ["light", "dark"] as const;
    let theme: Theme | undefined = "dark";

    if ((theme = themeNames.find((t) => localStorage.getItem("theme") === t))) {
      if (theme == "dark") {
        return false;
      }
      return true;
    }
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const themeNames = ["light", "dark"] as const;
    let theme: Theme | undefined = "dark";

    if ((theme = themeNames.find((t) => localStorage.getItem("theme") === t))) {
      if (theme) {
        return theme;
      }
    }

    return "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      changeTheme();
    } else {
      changeTheme();
    }
  }, [theme]);

  const toggle = () => {
    setTheme((theme) => {
      const t = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", t);

      setActive(!active);
      return t;
    });
  };

  const changeTheme = () => {
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
  };

  return (
    <div
      className={`toggle-button ${active ? "active" : ""}`}
      role="button"
      onClick={toggle}
    >
      <div className="toggle-circle" aria-hidden="true"></div>
    </div>
  );
}
