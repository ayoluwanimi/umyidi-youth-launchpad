import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Community() {
  return (
    <>
      <Helmet>
        <title>Community Hub | UMYIDI</title>
        <meta name="description" content="Join the UMYIDI community: learn about us, register for programs, or become a member/volunteer." />
        <link rel="canonical" href="/community" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Community Hub</h1>
          <p className="mt-3 text-muted-foreground">Connect, contribute, and grow with us.</p>
        </header>

        <section id="about" className="animate-fade-in">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-foreground/80 max-w-3xl">UMYIDI is dedicated to empowering youths from marginalized backgrounds and persons with disabilities through inclusive programs, mentorship, and opportunities.</p>
        </section>

        <section id="register" className="animate-fade-in">
          <h2 className="text-2xl font-semibold">Register for a Program</h2>
          <p className="mt-3 text-foreground/80 max-w-3xl">Ready to participate? Reach out and we’ll match you with the right program.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="hero"><a href="mailto:programs@umyidi.org">Email programs@umyidi.org</a></Button>
            <Button asChild variant="outline"><a href="/contact">Contact Page</a></Button>
          </div>
        </section>

        <section id="member" className="animate-fade-in">
          <h2 className="text-2xl font-semibold">Become a Member/Volunteer</h2>
          <p className="mt-3 text-foreground/80 max-w-3xl">Join our volunteer network or become a member to support events, mentorship, and outreach.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="outline"><a href="mailto:volunteer@umyidi.org">Volunteer via Email</a></Button>
            <Button asChild variant="hero"><a href="/contact">Talk to Us</a></Button>
          </div>
        </section>
      </main>
    </>
  );
}
