import Aside from "./components/Aside/Aside.tsx";

import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <div className="aside">
        <Aside />
      </div>
      <main className="main" aria-label="Main">
        Hello
      </main>
    </div>
  );
}
