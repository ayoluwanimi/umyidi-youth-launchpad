import { Helmet } from "react-helmet-async";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export default function Gallery() {
  const images = [g1, g2, g3, g4, g1, g2, g3, g4, g1, g2, g3, g4];
  return (
    <>
      <Helmet>
        <title>Gallery | UMYIDI</title>
        <meta name="description" content="Explore photos from UMYIDI programs and community events." />
        <link rel="canonical" href="/gallery" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mt-3 text-muted-foreground">Highlights from our programs and events</p>
        </header>

        <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {images.map((src, i) => (
            <figure key={i} className="relative aspect-square overflow-hidden rounded-lg border bg-card shadow-sm">
              <img src={src} alt={`UMYIDI gallery ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </section>
      </main>
    </>
  );
}
