import logoTiara from "@/assets/logo-tiara.png";

const HeroSection = () =>
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    background:
    "linear-gradient(135deg, hsl(350 80% 12%) 0%, hsl(350 78% 27%) 40%, hsl(350 60% 22%) 100%)"
  }}>

    {/* Gold overlay pattern */}
    <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
      "radial-gradient(circle at 25% 25%, hsl(43 72% 52%) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(43 72% 52%) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />


    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="fade-in flex justify-center mb-6">
        <img src={logoTiara} alt="Leon Nails & Beauty Logo" className="w-72 h-[216px] md:w-96 md:h-72 object-contain" />
      </div>
      <h1 className="fade-in font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-6 leading-tight">Leon Nails & Beauty

    </h1>
      <p className="fade-in font-serif text-lg md:text-2xl text-gold-light/80 mb-4 italic">
        Wo Schönheit auf Eleganz trifft
      </p>
      <p className="fade-in text-gold-light/60 text-sm md:text-base mb-10 tracking-wider uppercase font-sans">
        Perfektion in jedem Detail
      </p>
      <div className="fade-in">
        <a
        href="#termin"
        className="inline-block bg-gold hover:bg-gold-dark text-burgundy-dark font-semibold px-10 py-4 rounded-sm tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_72%_52%/0.3)] font-sans">

          Termin buchen
        </a>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-burgundy-dark/50 to-transparent" />
  </section>;


export default HeroSection;