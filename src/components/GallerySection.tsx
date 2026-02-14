import galleryFrench from "@/assets/gallery-french.jpg";
import galleryGlitzer from "@/assets/gallery-glitzer.jpg";
import galleryRot from "@/assets/gallery-rot.jpg";
import galleryNude from "@/assets/gallery-nude.jpg";
import galleryModern from "@/assets/gallery-modern.jpg";
import galleryFestlich from "@/assets/gallery-festlich.jpg";

const galleryItems = [
  { label: "Elegante French Nails", image: galleryFrench },
  { label: "Glamour Glitzer", image: galleryGlitzer },
  { label: "Klassisches Rot", image: galleryRot },
  { label: "Zartes Nude", image: galleryNude },
  { label: "Modernes Design", image: galleryModern },
  { label: "Festliche Nägel", image: galleryFestlich },
];

const GallerySection = () => (
  <section id="galerie" className="py-24 bg-cream">
    <div className="container mx-auto px-4">
      <div className="fade-in text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-gold" />
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-bold">
            Galerie
          </h2>
          <div className="h-px w-12 bg-gold" />
        </div>
        <p className="text-muted-foreground text-sm tracking-wider uppercase font-sans">
          Unsere schönsten Arbeiten
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="fade-in group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-burgundy/0 group-hover:bg-burgundy/40 transition-all duration-500">
              <span className="text-gold font-serif text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
