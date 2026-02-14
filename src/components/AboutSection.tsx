const AboutSection = () =>
<section id="ueber-uns" className="py-24 bg-cream">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <div className="fade-in">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold" />
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-bold">
            Über uns
          </h2>
          <div className="h-px w-12 bg-gold" />
        </div>
      </div>

      <div className="fade-in space-y-6 text-foreground/80 leading-relaxed font-sans">
        <p>
          Willkommen bei <strong className="text-burgundy">Leon Nails & Beauty</strong> – Ihrem exklusiven Nagelstudio in Ulm für anspruchsvolle Kundinnen. In einer Atmosphäre von zeitloser Eleganz widmen wir uns der Kunst der perfekten Maniküre und Nagelkunst.
        </p>
        <p>Unser erfahrenes Team in Ulm vereint höchste handwerkliche Präzision mit einem feinen Gespür für aktuelle Trends und individuelle Wünsche. Jede Behandlung wird mit erlesenen Produkten und unter strengsten Hygienestandards durchgeführt.</p>
        <p>
          Wir glauben, dass wahre Schönheit in den Details liegt. Deshalb nehmen wir uns
          für jede Kundin die Zeit, die es braucht – für ein Ergebnis, das begeistert
          und Ihre Persönlichkeit unterstreicht.
        </p>
      </div>

      <div className="fade-in mt-12 flex flex-wrap justify-center gap-8">
        {["Qualität", "Hygiene", "Präzision", "Beratung"].map((item) =>
      <div key={item} className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-3">
              <span className="text-gold font-serif text-lg font-bold">
                {item[0]}
              </span>
            </div>
            <p className="text-sm text-burgundy font-semibold tracking-wide uppercase font-sans">
              {item}
            </p>
          </div>
      )}
      </div>
    </div>
  </section>;


export default AboutSection;
