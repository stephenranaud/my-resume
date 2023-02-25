import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const containerApp = document.getElementById("app");

if (!containerApp) throw Error("Cannot find #app element");

const root = createRoot(containerApp);
root.render(<App />);
