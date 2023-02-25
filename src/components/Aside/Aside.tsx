import "./Aside.css";

export default function Aside() {
  return (
    <aside aria-label="Main aside">
      <header>
        <h1>Stephen BOND</h1>
        <p>AGENT SECRET POUR LA MAISON BLANCHE</p>
      </header>

      <p>
        Je suis un jeune agent secret motivé, passionné par la technologie,
        souhaitant évoluer en tant que agent secret <span>FULL-STACK</span>.
      </p>

      <ul>
        <li>
          <h3>Actualite</h3>
          <p>
            Actuellement, je travaille sur une série `Road To developer` le but
            est de présenter des projets concrets, passer des certifications
            PremiumAgentCamp, faire des interviews et le processus d'un Agent
            secret mais aussi de me promouvoir.
            https://my-fcc-summary-sairussdev.netlify.app/
          </p>
        </li>

        <li>
          <ul>
            <li>
              <h3>SOFT SKILLS</h3>
            </li>
            <li>Resodure les pbs</li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <h3>Hard SKILLS</h3>
            </li>
            <li>Resodure les pbs</li>
          </ul>
        </li>

        <li className="contacts">
          <h3>Me retrouver</h3>
          <div className="contact">
            <div className="contact__icon">Icon</div>
            <p className="contact__link">
              <a href="" target="_blank">
                link
              </a>
            </p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
