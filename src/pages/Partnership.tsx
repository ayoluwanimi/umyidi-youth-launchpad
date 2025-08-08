import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Partnership() {
  return (
    <>
      <Helmet>
        <title>Partnership | UMYIDI</title>
        <meta name="description" content="Partner with UMYIDI to empower youth through programs, mentorship, and community initiatives." />
        <link rel="canonical" href="/partnership" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Partnership</h1>
          <p className="mt-3 text-muted-foreground">Let’s create lasting impact together.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 items-center animate-fade-in">
          <div>
            <h2 className="text-2xl font-semibold">Why partner with us?</h2>
            <ul className="mt-3 list-disc pl-6 text-foreground/80 space-y-2">
              <li>Reach diverse youth communities</li>
              <li>Co-design inclusive programs</li>
              <li>Amplify impact through mentorship and resources</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Button asChild variant="hero"><a href="/contact">Start a Conversation</a></Button>
              <Button asChild variant="outline"><a href="mailto:partners@umyidi.org">Email partners@umyidi.org</a></Button>
            </div>
          </div>
          <div className="rounded-xl border p-6 bg-card shadow-sm">
            <p className="text-sm text-muted-foreground">We welcome collaborations with NGOs, educational institutions, companies, and individual mentors.</p>
          </div>
        </section>
      </main>
    </>
  );
}
