import { useState } from "react";
import CrownLogo from "./CrownLogo";

const modalContent: Record<string, {title: string;text: string;}> = {
  impressum: {
    title: "Impressum",
    text: "Königliche Nägel\nMusterstraße 12\n10115 Berlin\n\nVertreten durch: Maria Mustermann\nTelefon: +49 30 123 456 78\nE-Mail: info@koenigliche-naegel.de\n\nUmsatzsteuer-ID: DE123456789"
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    text: "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website."
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    text: "Mit der Buchung eines Termins akzeptieren Sie unsere allgemeinen Geschäftsbedingungen. Terminabsagen bitten wir mindestens 24 Stunden im Voraus vorzunehmen. Bei Nichterscheinen ohne rechtzeitige Absage behalten wir uns vor, eine Ausfallgebühr zu berechnen."
  }
};

const Footer = () => {
  const [modal, setModal] = useState<string | null>(null);

  return (
    <>
      <footer className="py-12 bg-burgundy-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-gold">
              <CrownLogo className="w-6 h-6" />
              <span className="font-serif text-lg tracking-wide">Leon Nails & Beauty</span>
            </div>

            <div className="flex gap-6 text-sm font-sans">
              {Object.keys(modalContent).map((key) =>
              <button
                key={key}
                onClick={() => setModal(key)}
                className="text-gold-light/60 hover:text-gold transition-colors capitalize tracking-wide">

                  {modalContent[key].title}
                </button>
              )}
            </div>

            <div className="h-px w-24 bg-gold/20" />

            <p className="text-gold-light/40 text-xs font-sans tracking-wider">© 2026 Leon Nails & Beauty– Alle Rechte vorbehalten.

            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modal &&
      <div
        className="fixed inset-0 z-[100] bg-burgundy-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setModal(null)}>

          <div
          className="bg-background max-w-lg w-full rounded-lg p-8 shadow-2xl border border-gold/20"
          onClick={(e) => e.stopPropagation()}>

            <h3 className="font-serif text-2xl text-burgundy font-bold mb-4">
              {modalContent[modal].title}
            </h3>
            <p className="text-foreground/70 text-sm font-sans leading-relaxed whitespace-pre-line">
              {modalContent[modal].text}
            </p>
            <div className="mt-6 text-right">
              <button
              onClick={() => setModal(null)}
              className="text-sm text-gold hover:text-gold-dark transition-colors font-sans tracking-wider uppercase">

                Schließen
              </button>
            </div>
          </div>
        </div>
      }
    </>);

};

export default Footer;