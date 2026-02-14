import { MapPin, Phone, Clock, Smartphone } from "lucide-react";

const ContactSection = () =>
<section
  id="kontakt"
  className="py-24"
  style={{
    background:
    "linear-gradient(180deg, hsl(350 80% 18%) 0%, hsl(350 78% 22%) 100%)"
  }}>

    <div className="container mx-auto px-4">
      <div className="fade-in text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-gold" />
          <h2 className="font-serif text-3xl md:text-4xl text-gold font-bold">
            Kontakt
          </h2>
          <div className="h-px w-12 bg-gold" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="fade-in space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-serif text-gold font-semibold mb-1">Adresse</h3>
              <p className="text-gold-light/70 text-sm font-sans">Neue Str. 22<br />
                89073 Ulm
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-serif text-gold font-semibold mb-1">Telefon</h3>
              <p className="text-gold-light/70 text-sm font-sans">+49 0731 92606989

            </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Smartphone className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-serif text-gold font-semibold mb-1">WhatsApp</h3>
              <p className="text-gold-light/70 text-sm font-sans">+49 157 52989998

            </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <h3 className="font-serif text-gold font-semibold mb-1">Öffnungszeiten</h3>
              <div className="text-gold-light/70 text-sm font-sans space-y-1">
                <p>Mo – Fr: 09:00 – 19:00 Uhr</p>
                <p>Sa: 09:00 – 18:00 Uhr</p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="fade-in rounded-lg overflow-hidden border border-gold/20 min-h-[280px]">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.!2d9.9908!3d48.3974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNeue+Str.+22%2C+89073+Ulm!5e0!3m2!1sde!2sde!4v1700000000000"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Neue Str. 22, 89073 Ulm" />

        </div>
      </div>
    </div>
  </section>;

export default ContactSection;