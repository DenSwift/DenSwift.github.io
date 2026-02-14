const services = [
  {
    category: "Maniküre",
    items: [
      { name: "Klassische Maniküre", price: "25 €" },
      { name: "Spa-Maniküre", price: "35 €" },
      { name: "Japanische Maniküre", price: "40 €" },
    ],
  },
  {
    category: "Gel-Nägel",
    items: [
      { name: "Gel-Neumodellage", price: "55 €" },
      { name: "Gel-Verstärkung", price: "45 €" },
      { name: "Gel-Lack", price: "30 €" },
    ],
  },
  {
    category: "Auffüllen",
    items: [
      { name: "Gel-Auffüllen", price: "40 €" },
      { name: "Acryl-Auffüllen", price: "42 €" },
    ],
  },
  {
    category: "Nageldesign",
    items: [
      { name: "French Nails", price: "10 €" },
      { name: "Strass & Glitzer", price: "ab 5 €" },
      { name: "Nail Art (pro Nagel)", price: "ab 3 €" },
    ],
  },
  {
    category: "Pediküre",
    items: [
      { name: "Klassische Pediküre", price: "30 €" },
      { name: "Spa-Pediküre", price: "45 €" },
      { name: "Gel-Lack Pediküre", price: "40 €" },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Nagel-Reparatur", price: "5 €" },
      { name: "Entfernung Gel/Acryl", price: "15 €" },
      { name: "Paraffinbad", price: "12 €" },
    ],
  },
];

const ServicesSection = () => (
  <section
    id="leistungen"
    className="py-24"
    style={{
      background:
        "linear-gradient(180deg, hsl(350 80% 18%) 0%, hsl(350 78% 22%) 100%)",
    }}
  >
    <div className="container mx-auto px-4">
      <div className="fade-in text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-gold" />
          <h2 className="font-serif text-3xl md:text-4xl text-gold font-bold">
            Leistungen & Preise
          </h2>
          <div className="h-px w-12 bg-gold" />
        </div>
        <p className="text-gold-light/60 text-sm tracking-wider uppercase font-sans">
          Exklusive Behandlungen für Ihre Schönheit
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.category}
            className="fade-in border border-gold/30 rounded-sm p-6 hover:border-gold/60 transition-all duration-300 bg-burgundy-dark/30 backdrop-blur-sm"
          >
            <h3 className="font-serif text-xl text-gold font-semibold mb-5 text-center">
              {service.category}
            </h3>
            <div className="h-px w-12 bg-gold/40 mx-auto mb-5" />
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-baseline text-sm font-sans"
                >
                  <span className="text-gold-light/80">{item.name}</span>
                  <span className="text-gold font-semibold ml-4 whitespace-nowrap">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
