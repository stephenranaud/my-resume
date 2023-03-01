import Aside from "./components/Aside/Aside.tsx";
import ToggleButton from "./components/Buttons/ToggleButton.tsx";

import "./App.css";

import wordIcon from "/src/images/word_icon.png";
import notionIcon from "/src/images/notion_icon.png";
import powerPointIcon from "/src/images/powerpoint_icon.png";
import excelIcon from "/src/images/excel_icon.png";
import trelloIcon from "/src/images/trello_icon.png";
import slackIcon from "/src/images/slack_icon.png";
import gitIcon from "/src/images/git_icon.png";
import vscodeIcon from "/src/images/vs-code_icon.png";
import discorIcon from "/src/images/discord_icon.png";
import googleCalendarIcon from "/src/images/google-calendar_icon.png";

export default function App() {
  return (
    <div className="wrapper light">
      <div className="aside">
        <Aside />
      </div>
      <main className="main" aria-label="Main">
        <div className="row-button">
          <ToggleButton />
        </div>

        <div className="hystorique row">
          <div className="formations">
            <h2>Formation</h2>
            <div className="formation">
              <h3> ISM DAKAR</h3>
              <p>2018 - 2021 LICENCE EN GÉNIE LOGICIEL & RÉSEAUX SYSTEMES</p>
            </div>

            <div className="formation">
              <h3>LTNOB | Gabon</h3>
              <p>
                {" "}
                2016 - 2017 | Bac sciences et technologies industrielles en
                génie électrotechnique.
              </p>
            </div>
          </div>

          <div className="experiences">
            <h2>EXPÉRIENCE PROFESSIONNELLE</h2>

            <div className="experience">
              <h3>TANSAIR</h3>
              <p>2021 | Une collaboration de 2 mois</p>
              <p>
                de 2 mois SOGAME EQUIP (GABON) 2016 | Stage manutentionnaire/
                gestion des stocks 3 mois LTNOB | Gabon 2016 - 2017 | Bac
                sciences et technologies industrielles en génie
                électrotechnique. J'ai été sollicité par la directrice
                administrative Mme Cécile Gery LELOUP à l'occasion de la refonte
                du site web de Transair. Bien que ce ne fut pas un stage, cela
                m’a aidé à mieux appréhender les enjeux du monde professionnel.
              </p>
            </div>

            <div className="experience">
              <h3>SOGAME EQUIP (GABON)</h3>
              <p>2016 | Stage manutentionnaire/ gestion des stocks 3 mois </p>
            </div>
          </div>
        </div>

        <div className="certifications row">
          <h2>CERTIFICATIONS RÉCENTES</h2>
          <div className="certifications__grid">
            <div className="certifications__certification">
              <h3>FrontEnd Development | FCC </h3>

              <p>
                Pour créer de puissantes applications à page unique (SPA) avec
                React et Redux.
              </p>
            </div>

            <div className="certifications__certification">
              <h3>JavaScript Algorithms and Data Structures | FC</h3>

              <p>La résolution de problèmes 
 est probablement l’une des 
 compétences les plus 
 importantes, cette certification 
 nous apprend cela avec JS.</p>
            </div>

            <div className="certifications__certification">
              <h3>BackEnd Development 
and APIs | FCC</h3>

              <p>Pour créer des applications 
back-end avec Node.js. Créer également 
des applications Web avec le framework 
Express, des microservices.</p>
            </div>

            <div className="certifications__certification">
              <h3>Responsive Web Design | FCC</h3>

              <p>
                Pour développer des compétences d’intégrateur web, d'interfaces
                utilisateurs d'un site ou d'une application, de manière réactive
                et adaptative.
              </p>
            </div>
          </div>
        </div>

        <div className="tools row">
          <h2>Outils</h2>

          <div className="tools__grid">
            <div className="tools__list">
              <div className="col">
                <div className="tools__row">
                  <img className="icon-tools" src={wordIcon} alt="Word icon" />
                </div>

                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={powerPointIcon}
                    alt="PowerPoint icon"
                  />
                </div>

                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={excelIcon}
                    alt="Excel icon"
                  />
                </div>
              </div>

              <span className="tools__label">Bureautique</span>
            </div>

            <div className="tools__list">
              <div className="col">
                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={notionIcon}
                    alt="Notion icon"
                  />
                </div>

                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={googleCalendarIcon}
                    alt="Google Calendar icon"
                  />
                </div>

                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={trelloIcon}
                    alt="Trello icon"
                  />
                </div>
              </div>

              <span className="tools__label">organisation</span>
            </div>

            <div className="tools__list">
              <div className="col">
                <div className="tools__row divider-2">
                  <img className="icon-tools" src={gitIcon} alt="Git icon" />
                </div>

                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={vscodeIcon}
                    alt="Visual Studio Code Icode"
                  />
                </div>
              </div>

              <span className="tools__label">Développement</span>
            </div>

            <div className="tools__list">
              <div className="col">
                <div className="tools__row divider-2">
                  <img
                    className="icon-tools"
                    src={slackIcon}
                    alt="Slack icon"
                  />
                </div>

                <div className="tools__row">
                  <img
                    className="icon-tools"
                    src={discorIcon}
                    alt="Discrod icon"
                  />
                </div>
              </div>
              <span className="tools__label">Communication</span>
            </div>
          </div>
        </div>

        <div className="projects row">
          <h2>PROJETS RÉCENTS</h2>
          <div className="projects__gird">
            <div className="projects__project">
              <h3>Blog personnel</h3>

              <p>
                J’ai créé ce blog car j’ai décidé de créer du contenu pour
                partager mon univers et ma série en cours.{" "}
                <a href="https://blog-sairussdev.netlify.app" target="_blank">
                  blog-sairussdev.netlify.app
                </a>
                .
              </p>

              <div className="tech-stack">
                Stack: AstroJS, React, TypeScript
              </div>
            </div>

            <div className="projects__project">
              <h3>Caabi-Ji</h3>

              <p>
                Une application de recherche d’emplois remote, cette idée m’est
                venu à l’esprit en réalisant les défis sur Twitter.
              </p>

              <div className="tech-stack">Stack: React, TypeScript</div>
            </div>

            <div className="projects__project">
              <h3>Markdown editor-manager</h3>

              <p>
                Ce projet me sers personnellement pour la création d’articles,
                pour me permettre de gérer, push et build mes articles.
                Application Desktop.
              </p>

              <div className="tech-stack">
                Stack: Electron, React, Remark, TS
              </div>
            </div>

            <div className="projects__project">
              <h3>Chat Application</h3>

              <p>
                Application de chat avec une API Rest, Web sockets et statut
                utilisateur en ligne, mise en place de l'authentification
                utilisateur avec tokens.
              </p>

              <div className="tech-stack">Stack: React, sockets, API Rest</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
