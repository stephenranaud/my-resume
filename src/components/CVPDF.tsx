import "./CVPDF.css";

import iconPDF from "../images/cv2.png";
import pdfUrlDemo from "../images/CV-demo.pdf";
import pdfUrl from "../images/CV-SAIZONOU-OGOULA-Stephen.pdf";

export default function CVPDF(): JSX.Element {
  const openNewWindow = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="cv-pdf">
      <div className="cv-pdf__img">
        <img src={iconPDF} alt="Image représentant un CV" />
      </div>

      <div className="cv-pdf__buttons">
        <button type="button">
          <a href={pdfUrl} download="CV-demo">
            Télécharger
          </a>
        </button>
        <button type="button" onClick={openNewWindow}>
          Voir
        </button>
      </div>
    </div>
  );
}
