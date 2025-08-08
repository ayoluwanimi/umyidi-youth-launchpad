import { Helmet } from "react-helmet-async";

const services = [
  { title: "Mentorship", desc: "Guidance from experienced mentors across disciplines." },
  { title: "Workshops", desc: "Skills training in entrepreneurship, tech, and creative fields." },
  { title: "Community Events", desc: "Townhalls, hackdays, and networking for youth leaders." },
  { title: "Accessibility Support", desc: "Inclusive programs designed for persons with disabilities." },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | UMYIDI</title>
        <meta name="description" content="Explore UMYIDI services: mentorship, workshops, community events, and accessibility support." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-3 text-muted-foreground">What we offer to help youths thrive.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 animate-fade-in">
          {services.map((s) => (
            <article key={s.title} className="rounded-xl border bg-card p-6 shadow-sm hover-scale">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-foreground/80">{s.desc}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
