const services = [
  {
    title: "Small Business Websites",
    description:
      "Clean, mobile-friendly websites for local businesses, creators, makers, and solo operators who need a real web presence.",
  },
  {
    title: "Homebrewed Apps",
    description:
      "Practical tools built to solve everyday problems without turning the project into a dragon with Wi-Fi.",
  },
  {
    title: "Digital Setup Help",
    description:
      "Forms, landing pages, basic workflows, and simple systems that help keep the little things from piling up.",
  },
];

const offerings = [
  "One-page business sites",
  "Landing pages",
  "Basic ecommerce setup",
  "Contact forms",
  "Portfolio pages",
  "Simple web tools",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">
            Circuitbard Labs
          </div>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Websites • Apps • Digital Systems
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Practical digital tools for everyday chaos.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Circuitbard Labs builds useful websites, homebrewed apps, and
              lightweight digital systems that keep the little things from
              piling up.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-6 py-3 text-center font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Work With Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Project 001
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Circuitbard Labs Website
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              The first official build: a home base for apps, services, client
              work, and the occasional bardic warning shot.
            </p>
            <p className="mt-6 rounded-2xl bg-slate-950 p-4 text-sm text-slate-400">
              Scope creep gets the lute.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What I Build
          </p>
          <h2 className="mt-4 text-4xl font-black text-white">
            Useful tech without the corporate nonsense.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Featured Project
            </p>
            <h2 className="mt-4 text-4xl font-black text-white">
              FollowUp Agent
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-300">
              FollowUp Agent is a simple tracker for reminders, conversations,
              loose ends, and important next steps. It is built for people who
              need a practical way to remember what needs attention next.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full border border-slate-600 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Ask About This Project
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-black text-white">
            Starter builds for real-world needs.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <div
                key={offering}
                className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 font-semibold text-slate-200"
              >
                {offering}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About
          </p>
          <h2 className="mt-4 text-4xl font-black text-white">
            Built by an independent maker with a practical streak.
          </h2>
          <p className="mt-6 leading-8 text-slate-300">
            Circuitbard Labs is a small independent tech lab focused on building
            useful, lightweight digital tools. The goal is simple: make things
            that help people manage the little stuff before it becomes a
            mountain.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black text-white">
            Need a site, app, or simple digital setup?
          </h2>
          <p className="mt-6 leading-8 text-slate-300">
            Reach out and let’s talk through what you need. Lute currently
            reserved for scope creep.
          </p>

          <a
            href="mailto:circuitbardlabs@gmail.com"
            className="mt-8 inline-block rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Email Circuitbard Labs
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        Built by Circuitbard Labs. No wizard bones required. Lute nearby just in
        case.
      </footer>
    </main>
  );
}