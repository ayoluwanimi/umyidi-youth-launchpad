import { Helmet } from "react-helmet-async";

export default function Blog() {
  const posts = [
    { title: "How mentorship unlocks potential", href: "#" },
    { title: "Designing inclusive youth programs", href: "#" },
    { title: "Community impact stories", href: "#" },
  ];
  return (
    <>
      <Helmet>
        <title>Blog | UMYIDI</title>
        <meta name="description" content="Insights and stories from the UMYIDI community." />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-3 text-muted-foreground">Stories, resources, and updates.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-3 animate-fade-in">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="rounded-xl border bg-card p-6 shadow-sm story-link">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Read more →</p>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
