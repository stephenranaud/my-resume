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

        <div className="certifications row">
          <h2>CERTIFICATIONS RÉCENTES</h2>
          <div className="certifications__grid">
            <div className="certifications__certification">
              <h3>XXX | PremiumAgentCamp</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="certifications__certification">
              <h3>XXX | PremiumAgentCamp</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="certifications__certification">
              <h3>XXX | PremiumAgentCamp</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="certifications__certification">
              <h3>XXX | PremiumAgentCamp</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              <h3>Exploit multi-plateforme Log4j</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Un
                clone d’une mission 007 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor i
              </p>
            </div>

            <div className="projects__project">
              <h3>Exploit multi-plateforme Log4j</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Un
                clone d’une mission 007 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor i
              </p>
            </div>

            <div className="projects__project">
              <h3>Exploit multi-plateforme Log4j</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Un
                clone d’une mission 007 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor i
              </p>
            </div>

            <div className="projects__project">
              <h3>Exploit multi-plateforme Log4j</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Un
                clone d’une mission 007 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor i
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
