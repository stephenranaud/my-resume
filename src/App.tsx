import Aside from "./components/Aside/Aside.tsx";

export default function App() {
  return (
    <div className="wrapper">
      <Aside />
      <main aria-label="Main">Hello</main>
    </div>
  );
}
