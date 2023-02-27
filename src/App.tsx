import Aside from "./components/Aside/Aside.tsx";
import ToggleButton from "./components/Buttons/ToggleButton.tsx";

import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <div className="aside">
        <Aside />
      </div>
      <main className="main" aria-label="Main">
        <div className="row-button">
          <ToggleButton />
        </div>

        <div className="hystorique">
          <div className="formations">
            <h2>Formation</h2>
            <div className="formation">
              <h3>Autodidacte</h3>
              <p>2017 - 2022 | Avec internet et de la motivation</p>
            </div>

            <div className="formation">
              <h3> Bac (presque obtenu)</h3>
              <p>20XX - 20XX | L’essentiel est de participer</p>
            </div>
          </div>
          <div className="experiences">
            <h2>EXPÉRIENCE PROFESSIONNELLE</h2>
            <div className="experience">
              <h3>Reproduire l’affaire Martel mais en corée du nord</h3>
              <p>2022 | Fullstack agent</p>
            </div>

            <div className="experience">
              <h3>
                Chargé de faire infiltré la COVID en chine par une organisation
                secrète
              </h3>
              <p>2019 | C’était dur mais j’ai réussis</p>
            </div>
          </div>
        </div>

        <div className="certifications">
          <div className="certifications__certification">cert1</div>
          <div className="certifications__certification">cert2</div>
          <div className="certifications__certification">cert3</div>
          <div className="certifications__certification">cert4</div>
        </div>

        <div className="tools">
          <div className="tools__tool">tool</div>
          <div className="tools__tool">tool</div>
          <div className="tools__tool">tool</div>
          <div className="tools__tool">tool</div>
        </div>

        <div className="projects">
          <div className="projects__project">tool</div>
          <div className="projects__project">tool</div>
          <div className="projects__project">tool</div>
          <div className="projects__project">tool</div>
        </div>
      </main>
    </div>
  );
}
