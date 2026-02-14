import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoTiara from "@/assets/logo-tiara.png";

const navLinks = [
{ href: "#hero", label: "Start" },
{ href: "#ueber-uns", label: "Über uns" },
{ href: "#leistungen", label: "Leistungen" },
{ href: "#galerie", label: "Galerie" },
{ href: "#termin", label: "Termin" },
{ href: "#kontakt", label: "Kontakt" }];


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-burgundy-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`
      }>

      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 text-gold">
          <img src={logoTiara} alt="Leon Nails & Beauty Logo" className="w-16 h-10 object-contain" />
          <span className="font-serif text-xl font-semibold tracking-wide">Leon Nails & Beauty

          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-gold-light hover:text-gold transition-colors text-sm tracking-widest uppercase font-sans">

              {link.label}
            </a>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gold"
          aria-label="Menü">

          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen &&
      <nav className="md:hidden bg-burgundy-dark/98 backdrop-blur-sm border-t border-gold/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={handleClick}
            className="text-gold-light hover:text-gold transition-colors text-sm tracking-widest uppercase font-sans py-2">

                {link.label}
              </a>
          )}
          </div>
        </nav>
      }
    </header>);

};

export default Header;