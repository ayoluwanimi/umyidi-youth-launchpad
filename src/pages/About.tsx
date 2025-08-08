import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About UMYIDI</title>
        <meta name="description" content="Learn about UMYIDI: history, mission & vision, board, and youth advisory board." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold">About UMYIDI</h1>
          <p className="mt-3 text-muted-foreground">Who we are and what we stand for.</p>
        </header>

        <section id="history" className="space-y-3 animate-fade-in">
          <h2 className="text-2xl font-semibold">History</h2>
          <p className="text-foreground/80 max-w-3xl">Founded to bridge opportunity gaps for youths, UMYIDI has grown into a community-led organization driving inclusive development.</p>
        </section>

        <section id="mission-vision" className="space-y-3 animate-fade-in">
          <h2 className="text-2xl font-semibold">Mission & Vision</h2>
          <p className="text-foreground/80 max-w-3xl">Mission: Empower youths through skills, mentorship, and community. Vision: A world where every young person thrives, regardless of background or ability.</p>
        </section>

        <section id="board" className="space-y-3 animate-fade-in">
          <h2 className="text-2xl font-semibold">Board of Directors</h2>
          <p className="text-foreground/80 max-w-3xl">Our board provides governance and strategic direction with a commitment to transparency and impact.</p>
        </section>

        <section id="youth-advisory" className="space-y-3 animate-fade-in">
          <h2 className="text-2xl font-semibold">Youth Advisory Board</h2>
          <p className="text-foreground/80 max-w-3xl">A diverse group of youth leaders guiding program design and ensuring our work remains youth-centered.</p>
        </section>
      </main>
    </>
  );
}
