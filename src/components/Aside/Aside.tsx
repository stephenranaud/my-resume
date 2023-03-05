import { useState } from "react";

import "./Aside.css";

import CVPDF from "../CVPDF.tsx";

import linkedInImageIcon from "/src/assets/icons/linkedin.png";
import twitterImageIcon from "/src/assets/icons/twitter.png";
import githubImageIcon from "/src/assets/icons/github.png";
import devImageIcon from "/src/assets/icons/dev.png";
import smartphoneImageIcon from "/src/assets/icons/smartphone.png";
import homeImageIcon from "/src/assets/icons/home.png";

export default function Aside(): JSX.Element {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <aside
      className={`aside-main ${active ? "active" : ""}`}
      aria-label="Main aside"
    >
      <button className="btn-show-infos" type="button" onClick={handleClick}>
        <div>{!active ? "Voir" : "Masquer"}</div>
      </button>

      <header className="header-main" aria-label="Header main">
        <h1>STEPHEN OGOULA SAIZONOU</h1>
        <p>DEVELOPPEUR FULL-STACK</p>
      </header>

      <p className="container">
        Je suis un jeune développeur motivé, passionné par la technologie,
        souhaitant évoluer en tant que développeur{" "}
        <span className="txt-accent-bold">FULL-STACK</span>.
      </p>

      <ul className="container">
        <li>
          <h3 className="txt-accent">Actualite</h3>

          <p>
            Actuellement, je travaille sur une série{" "}
            <span className="txt-accent">&grave;Road To developer&grave;</span>{" "}
            le but est de présenter des des projets concrets, de passer des
            certifications FreeCodeCamp, faire des interviews et le processus
            d'un développeur mais aussi de me promouvoir.
            <a
              href="https://my-fcc-summary-sairussdev.netlify.app/"
              target="_blank"
            >
              https://my-fcc-summary-sairussdev.netlify.app/
            </a>
          </p>
        </li>

        <li>
          <div className="skills">
            <h3 className="skills-title txt-accent">SOFT SKILLS</h3>
            <ul className="list list--disc">
              <li>J'aime résoudre des problèmes</li>
              <li>Passionné</li>
              <li>Curieux</li>
              <li>Autonome, autoformation</li>
              <li>Déterminé</li>
              <li>Ouvert d'esprit</li>
              <li>Rigueur</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="skills">
            <h3 className="skills-title txt-accent">HARD SKILLS</h3>
            <ul className="list list--disc">
              <li>
                Langages: JS, TypeScript, Dart, Pyhthon, CSS3/HTML5 et PHP
              </li>
              <li>Tests</li>
              <li>Base de données relationnelle</li>
              <li>APT Rest</li>
              <li>Docker</li>
              <li>Cadre Frotend: Angular, React</li>
              <li>Cadre Backend: SymfonyM ExpressJS, AdonisJS</li>
            </ul>
          </div>
        </li>

        <li>
          <h3 className="txt-accent">Me retrouver</h3>
          <ul className="contacts">
            <li>
              <div className="contacts__contact">
                <div className="contact__icon">
                  <img
                    src={linkedInImageIcon}
                    alt="icon LinkedIn"
                    aria-hidden
                    className="icon"
                  />
                </div>
                <p className="contact__link">
                  <a
                    href="https://www.linkedin.com/in/stephen-ranaud"
                    target="_blank"
                  >
                    linkedIn:@stephen-ranaud
                  </a>
                </p>
              </div>
            </li>

            <li>
              <div className="contacts__contact">
                <div className="contact__icon">
                  <img
                    src={twitterImageIcon}
                    alt="icon Twitter"
                    aria-hidden
                    className="icon"
                  />
                </div>
                <p className="contact__link">
                  <a href="https://twitter.com/RanaudStephen" target="_blank">
                    @RanaudStephen
                  </a>
                </p>
              </div>
            </li>

            <li>
              <div className="contacts__contact">
                <div className="contact__icon">
                  <img
                    src={githubImageIcon}
                    className="icon"
                    alt="icon Github"
                    aria-hidden
                  />
                </div>
                <p className="contact__link">
                  <a href="https://github.com/stephenranaud/" target="_blank">
                    @StephenRanaud
                  </a>
                </p>
              </div>
            </li>

            <li>
              <div className="contacts__contact">
                <div className="contact__icon">
                  <img
                    src={devImageIcon}
                    className="icon"
                    alt="icon DevTo"
                    aria-hidden
                  />
                </div>
                <p className="contact__link">
                  <a href="" target="_blank">
                    dev.to/sairussdev
                  </a>
                </p>
              </div>
            </li>

            <li>
              <div className="contacts__contact">
                <div className="contact__icon">
                  <img
                    src={smartphoneImageIcon}
                    className="icon"
                    alt="icon smartphone"
                    aria-hidden
                  />
                </div>
                <p className="contact__link">+221 76 418 68 48</p>
              </div>
            </li>

            <li>
              <div className="contacts__contact">
                <div className="contact__icon">
                  <img
                    src={homeImageIcon}
                    className="icon"
                    alt="icon home"
                    aria-hidden
                  />
                </div>
                <p className="contact__link">
                  Sénégal - Ouakam, monument la renaissance
                </p>
              </div>
            </li>

            <li>
              <h3 className="txt-accent">Version PDF</h3>
              {CVPDF()}
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
