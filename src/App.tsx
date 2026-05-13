import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const heroStats = [
  { value: '24/7', label: 'AI response' },
  { value: 'Vite', label: 'fast frontend' },
  { value: 'TG', label: 'lead handoff' },
];

const services = [
  { title: 'Premium landing pages', text: 'Adaptive sites with strong first screens, clean structure and conversion-focused sections.' },
  { title: 'AI sales assistants', text: 'Chat widgets that qualify visitors, collect context and guide users toward a request.' },
  { title: 'Telegram funnels', text: 'Telegram-first contact flows for quick conversations, briefs and lead delivery.' },
  { title: 'Portfolio & brand systems', text: 'Personal and studio websites with a polished visual identity and reusable components.' },
];

const stack = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vercel', 'Telegram', 'AI widgets', 'SEO'];
const process = ['Brief', 'Concept', 'Interface', 'Development', 'Launch', 'Improve'];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-void/78 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" onClick={closeMenu} className="group inline-flex items-center gap-3" aria-label="Elven Syndicate home">
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-emerald/40 bg-white/[0.04] text-sm font-black text-gold shadow-arcane">
            <span className="absolute inset-1 rounded-xl border border-violet/20" />
            ES
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.25em] text-white">ELVEN</span>
            <span className="block text-xs uppercase tracking-[0.31em] text-mist">Syndicate</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-mist transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="https://t.me/ElvenSyndicateStudio" className="hidden rounded-full border border-emerald/35 bg-emerald/10 px-5 py-3 text-sm font-bold text-emerald transition hover:bg-emerald hover:text-void md:inline-flex">
          Start a project
        </a>

        <button type="button" className="relative z-[90] grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-white shadow-violet transition hover:bg-white/10 md:hidden" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen((value) => !value)}>
          <span className="relative h-4 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'scale-x-0 opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`fixed inset-0 z-[70] bg-void/95 px-5 pt-24 backdrop-blur-2xl transition duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={closeMenu} aria-hidden={!isMenuOpen}>
        <div id="mobile-menu" className={`mx-auto max-w-md rounded-[2rem] border border-white/10 bg-obsidian/95 p-5 shadow-violet transition duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`} onClick={(event) => event.stopPropagation()}>
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-2xl px-4 py-4 text-base font-bold text-white transition hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="https://t.me/ElvenSyndicateStudio" onClick={closeMenu} className="mt-5 inline-flex w-full justify-center rounded-2xl bg-emerald px-5 py-4 text-sm font-black text-void transition hover:bg-[#68ffd5]">
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="text-sm font-black uppercase tracking-[0.34em] text-emerald">{children}</p>;
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-void text-parchment">
      <Header />

      <section className="relative isolate flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald/10" />
          <div className="absolute left-[70%] top-[50%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15" />
          <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
          <div className="absolute bottom-20 left-[-120px] h-80 w-80 rounded-full bg-emerald/20 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-emerald/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-emerald backdrop-blur">
              Web · AI · Telegram funnels
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              AI-powered websites with a dark fantasy edge.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">
              Elven Syndicate creates premium landing pages, AI sales assistants and digital systems that turn attention into qualified requests.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="https://t.me/ElvenSyndicateStudio" className="inline-flex items-center justify-center rounded-2xl bg-emerald px-6 py-4 text-sm font-black text-void shadow-[0_0_50px_rgba(29,242,178,.22)] transition hover:-translate-y-0.5 hover:bg-[#68ffd5]">
                Discuss on Telegram
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
                Explore services
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-mist">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-arcane backdrop-blur">
            <div className="rounded-[1.5rem] border border-emerald/15 bg-black/35 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald">Arcane AI Core</p>
                  <p className="mt-2 text-xl font-bold text-white">Lead capture interface</p>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-gold/30 bg-gold/10" />
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-mist">
                  Visitor: “I need a website with an AI assistant.”
                </div>
                <div className="ml-6 rounded-2xl border border-emerald/20 bg-emerald/10 p-4 text-sm text-emerald">
                  Assistant: “I’ll collect your niche, goal, style and contact details.”
                </div>
                <div className="rounded-2xl border border-violet/20 bg-violet/10 p-4 text-sm text-mist">
                  System: brief analyzed · Telegram handoff prepared · request qualified
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Brief', 'Intent', 'Handoff'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center text-xs font-bold text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel>About</SectionLabel>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              A studio prototype for premium web and AI experiences.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
              The site is built as a scalable foundation: strong visuals, clean components, mobile-first layout, clear sections and space for future images, effects, cases and AI widgets.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">What we build</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald/35">
              <div className="mb-8 h-12 w-12 rounded-2xl border border-gold/25 bg-gold/10" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-mist">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-10">
          <SectionLabel>Stack</SectionLabel>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm font-bold text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          From rough idea to production-ready digital system.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {process.map((item, index) => (
            <article key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-black text-gold">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{item}</h3>
              <p className="mt-4 leading-7 text-mist">
                Placeholder step description. Later we will replace it with the exact workflow and real project details.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-violet/20 bg-violet/10 p-8 shadow-violet sm:p-12">
          <SectionLabel>Trust</SectionLabel>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Built to become a real portfolio-grade project, not a temporary demo.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
            Next iterations will add real visuals, refined animations, AI assistant widget, cases, testimonials and final copywriting.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald/20 bg-emerald/10 p-8 text-center shadow-arcane sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Ready to summon your digital system?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-mist">
            Tell me your niche, goal, references and desired style. The next iteration will turn this prototype into a stronger production-ready website.
          </p>
          <a href="https://t.me/ElvenSyndicateStudio" className="mt-8 inline-flex rounded-2xl bg-emerald px-7 py-4 font-black text-void transition hover:-translate-y-0.5 hover:bg-[#68ffd5]">
            Contact in Telegram
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-mist sm:px-6 lg:px-8">
        <p>© 2026 Elven Syndicate. All rights reserved.</p>
        <p className="mt-2">Built by Sergey · Web & AI Development</p>
        <p className="mt-2">Crafted with code, runes and artificial intelligence.</p>
      </footer>
    </main>
  );
}

export default App;
