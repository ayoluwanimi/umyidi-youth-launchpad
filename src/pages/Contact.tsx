import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | UMYIDI</title>
        <meta name="description" content="Get in touch with UMYIDI for partnerships, programs, or volunteering." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-muted-foreground">We’d love to hear from you.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 items-start animate-fade-in">
          <div className="rounded-xl border p-6 bg-card shadow-sm">
            <h2 className="text-xl font-semibold">Reach us</h2>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li>Email: <a className="underline underline-offset-4" href="mailto:hello@umyidi.org">hello@umyidi.org</a></li>
              <li>Partnerships: <a className="underline underline-offset-4" href="mailto:partners@umyidi.org">partners@umyidi.org</a></li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border shadow-sm">
            <iframe
              title="UMYIDI location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929960.910522471!2d2.676932!3d9.081999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c0b1b2f0d0d9f%3A0x36b21b7d6d614e62!2sNigeria!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
