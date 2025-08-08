import { Helmet } from "react-helmet-async";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | UMYIDI</title>
        <meta name="description" content="Explore UMYIDI projects empowering youth through innovation, mentorship, and storytelling." />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Our Projects</h1>
          <p className="mt-3 text-muted-foreground">Programs and initiatives driving real impact.</p>
        </header>

        <section id="ideate" className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div>
            <h2 className="text-2xl font-semibold">Ideate Nigeria Youth Enterprise Challenge</h2>
            <p className="mt-3 text-foreground/80">Supporting young innovators with mentorship, resources, and a platform to build solutions for their communities.</p>
          </div>
          <figure className="rounded-xl overflow-hidden border shadow-sm">
            <img src={g1} alt="Youth collaborating during the Ideate Nigeria challenge" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </section>

        <section id="youth-ideas" className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
          <figure className="rounded-xl overflow-hidden border shadow-sm order-last md:order-first">
            <img src={g2} alt="Volunteers and teens at a community event" className="w-full h-full object-cover" loading="lazy" />
          </figure>
          <div>
            <h2 className="text-2xl font-semibold">Youth Ideas Challenge</h2>
            <p className="mt-3 text-foreground/80">A platform for youths to pitch, validate, and grow ideas with guidance from mentors and peers.</p>
          </div>
        </section>

        <section id="ezumezu" className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div>
            <h2 className="text-2xl font-semibold">Ezumezu: The Podcast</h2>
            <p className="mt-3 text-foreground/80">Stories, experiences, and dialogues that shape a more inclusive youth narrative.</p>
          </div>
          <figure className="rounded-xl overflow-hidden border shadow-sm">
            <img src={g4} alt="Podcast recording with youths and mentor" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </section>
      </main>
    </>
  );
}
