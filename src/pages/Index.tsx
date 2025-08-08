import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Mic, ImageIcon } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>UMYIDI — Empowering Youth</title>
        <meta name="description" content="UMYIDI empowers youth through skills, mentorship, and community programs." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="UMYIDI — Empowering Youth" />
        <meta property="og:description" content="Programs, mentorship, and opportunities that uplift young people." />
      </Helmet>

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-80 bg-[radial-gradient(60%_60%_at_90%_10%,hsl(var(--primary)/0.18),transparent_60%),radial-gradient(60%_60%_at_10%_90%,hsl(var(--accent)/0.22),transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Empowering Youth. Building Community.</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-prose">
              UMYIDI provides skills, mentorship, and real opportunities for young people to thrive — with inclusivity at the core.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/programs/register">Register for Programs</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/member-volunteer">Become a Member</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl border bg-card shadow-[var(--shadow-elevated)]" aria-label="Hero media placeholder">
              <div className="h-full w-full grid place-items-center text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-sm">
                  <ImageIcon className="opacity-70" /> Add your hero video or image here
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Empowering youth through skills, mentorship, and community.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[image:var(--gradient-subtle)]">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg text-foreground/80 font-medium">
              Giving youths from marginalized backgrounds and persons with disabilities the platform, skills, and resources to thrive.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Journey & Milestones</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border bg-card p-6 shadow-sm">
                <Rocket className="text-primary" />
                <h3 className="mt-3 font-semibold">Youth Challenge</h3>
                <p className="text-sm text-muted-foreground mt-2">Our Ideate Nigeria Youth Challenge enters its 3rd year.</p>
                <a href="https://instagram.com/umyidi" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm underline underline-offset-4">Instagram →</a>
              </article>
              <article className="rounded-xl border bg-card p-6 shadow-sm">
                <Users className="text-primary" />
                <h3 className="mt-3 font-semibold">Teens Townhall</h3>
                <p className="text-sm text-muted-foreground mt-2">Our bi-monthly Teens Townhall reaches its 2,000th milestone.</p>
              </article>
              <article className="rounded-xl border bg-card p-6 shadow-sm">
                <Mic className="text-primary" />
                <h3 className="mt-3 font-semibold">Ezumezu Podcast</h3>
                <p className="text-sm text-muted-foreground mt-2">We launched Ezumezu Podcast, where youths recount stories.</p>
                <a href="https://facebook.com/umyidi" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm underline underline-offset-4">Facebook →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Gallery</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <figure key={i} className="relative aspect-square overflow-hidden rounded-lg border bg-card shadow-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_30%_20%,hsl(var(--primary)/0.15),transparent_70%)]" aria-hidden="true" />
                  <div className="h-full w-full grid place-items-center text-xs text-muted-foreground">Add image</div>
                </figure>
              ))}
            </div>
            <Link to="/gallery" className="mt-6 inline-block underline underline-offset-4">View Full Gallery →</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
