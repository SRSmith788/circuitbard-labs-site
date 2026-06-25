const contactEmail = "circuitbardlabs@outlook.com";

const primaryServices = [
  {
    title: "Small Business Websites",
    description:
      "Clean, mobile-friendly websites for small businesses, makers, creators, and solo operators who need a professional online home without unnecessary complexity.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for products, services, portfolios, launches, or campaigns that need to explain the offer clearly and guide visitors toward action.",
  },
  {
    title: "Digital Setup Help",
    description:
      "Practical help with forms, contact paths, simple workflows, links, and lightweight online systems that make a business easier to manage.",
  },
];

const offerings = [
  "One-page business websites",
  "Mobile-friendly landing pages",
  "Basic ecommerce setup",
  "Contact and inquiry forms",
  "Portfolio and project pages",
  "Simple web tools and workflows",
];

const projectHighlights = [
  "Responsive one-page website",
  "Brand-aligned red and black visual system",
  "Subtle circuit-inspired background",
  "GitHub version control",
  "Vercel deployment",
  "Desktop and phone testing",
];

export default function Home() {
  return (
    <main className="circuitbard-bg min-h-screen overflow-x-hidden text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-8">
        <nav className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 text-lg font-bold tracking-tight text-white">
        <img
         src="/circuitbard-logo.jpg"
         alt="Circuitbard Labs logo"
        className="h-16 w-auto rounded-sm"        
        />
        <span>Circuitbard Labs</span>
        </a>

          <div className="hidden gap-6 text-sm text-stone-300 md:flex">
            <a href="#services" className="transition hover:text-rose-400">
              Services
            </a>
            <a href="#projects" className="transition hover:text-rose-400">
              Projects
            </a>
            <a href="#about" className="transition hover:text-rose-400">
              About
            </a>
            <a href="#contact" className="transition hover:text-rose-400">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-8 py-12 sm:py-16 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 sm:text-sm sm:tracking-[0.3em]">
              Websites • Apps • Digital Systems
            </p>

            <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
              Practical digital tools for everyday chaos.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
              Circuitbard Labs builds clean websites, useful web tools, and
              lightweight digital systems for small businesses, creators, and
              people trying to keep the little things from piling up.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="w-full rounded-full bg-rose-500 px-6 py-3 text-center font-bold text-white transition hover:bg-rose-400 sm:w-auto"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="w-full rounded-full border border-rose-950/70 px-6 py-3 text-center font-bold text-white transition hover:border-rose-400 hover:text-rose-400 sm:w-auto"
              >
                Work With Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-rose-950/70 bg-zinc-950/70 p-5 shadow-2xl sm:p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Project 001
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Circuitbard Labs Website
            </h2>
            <p className="mt-4 leading-7 text-stone-300">
              The first official build: a live web presence for Circuitbard
              Labs, created to introduce the brand, showcase services, and
              prepare the way for future client work.
            </p>
            <p className="mt-6 rounded-2xl bg-black/40 p-4 text-sm text-stone-400">
              Built with a maker&apos;s hands, a storyteller&apos;s eye, and a
              lute kept nearby for scope creep.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-rose-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Useful websites and systems without the corporate maze.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-stone-300">
            Circuitbard Labs focuses on practical builds: sites, pages, and
            small digital systems that help people explain what they do, collect
            inquiries, organize next steps, and look more professional online.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {primaryServices.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-rose-950/70 bg-zinc-950/70 p-6"
              >
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-stone-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rose-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
            What I Can Build
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Starter builds for real-world needs.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <div
                key={offering}
                className="rounded-2xl border border-rose-950/70 bg-zinc-950/70 px-5 py-4 font-semibold text-stone-200"
              >
                {offering}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-rose-950/70 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
              Featured Project
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              FollowUp Agent
            </h2>
          </div>

          <div>
            <p className="leading-8 text-stone-300">
              FollowUp Agent is a simple follow-up tracker for reminders,
              conversations, loose ends, and important next steps. It is built
              for people who need a practical way to remember what needs
              attention next without turning task tracking into another job.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full border border-rose-950/70 px-6 py-3 font-bold text-white transition hover:border-rose-400 hover:text-rose-400"
            >
              Ask About This Project
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-rose-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
            Project 001 Case Note
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            This site is the first proof-of-work build.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-rose-950/70 bg-zinc-950/70 p-6">
              <h3 className="text-xl font-bold text-white">
                Circuitbard Labs Website
              </h3>
              <p className="mt-4 leading-7 text-stone-300">
                A responsive one-page business website built to establish the
                Circuitbard Labs brand, explain available services, feature
                current projects, and create a clear contact path.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projectHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-rose-950/70 bg-zinc-950/70 px-5 py-4 text-sm font-semibold text-stone-200"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-rose-950/70 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
            About
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Built by an independent maker with a practical streak.
          </h2>
          <p className="mt-6 leading-8 text-stone-300">
            Circuitbard Labs is an independent web and app studio focused on
            practical tools, clear communication, and useful digital systems.
            The goal is simple: build things that help people manage the small
            stuff before it becomes a mountain.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-rose-950/70 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-950/70 bg-zinc-950/70 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Need a site, landing page, or simple digital setup?
          </h2>
          <p className="mt-6 leading-8 text-stone-300">
            Reach out and let&apos;s talk through what you need, what you
            already have, and what kind of build would actually help.
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-8 inline-block rounded-full bg-rose-500 px-6 py-3 font-bold text-white transition hover:bg-rose-400"
          >
            Email Circuitbard Labs
          </a>

          <p className="mt-4 text-sm text-stone-400">{contactEmail}</p>
        </div>
      </section>

      <footer className="border-t border-rose-950/70 px-6 py-8 text-center text-sm text-stone-500">
        Built by Circuitbard Labs. No wizard bones required. Lute nearby just in
        case.
      </footer>
    </main>
  );
}