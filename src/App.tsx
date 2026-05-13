import { useEffect, useState } from 'react';

const assets = {
  logo: '/assets/logo-es.png',
  hero: '/assets/hero-visual.png',
  background: '/assets/bg-arcane.png',
  core: '/assets/core-visual.png',
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const heroStats = [
  { value: '24/7', label: 'assistant online' },
  { value: 'Fast', label: 'fast build' },
  { value: 'TG', label: 'lead handoff' },
];

const services = [
  { title: 'Premium landing pages', text: 'Modern responsive websites with strong hero sections, clear offers, fast loading and Telegram-ready CTA flows.' },
  { title: 'AI sales assistants', text: 'Assistant widgets that answer questions, collect client context, qualify leads and prepare requests before you reply.' },
  { title: 'Telegram funnels', text: 'Simple conversion paths where visitors move from the website into Telegram with a clear task, budget and project brief.' },
  { title: 'Portfolio & brand systems', text: 'Personal and studio websites with memorable visuals, reusable components and a style that feels like a real brand.' },
];

const stack = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vercel', 'Telegram', 'AI widgets', 'SEO'];
const process = [
  { title: 'Brief', text: 'We collect the goal, niche, references, target action and the exact feeling the website should create.' },
  { title: 'Concept', text: 'We turn the raw idea into structure: sections, offer, visual direction, CTA logic and future content placeholders.' },
  { title: 'Interface', text: 'We build the first strong screen, cards, rhythm, mobile layout and the core visual system of the project.' },
  { title: 'Development', text: 'We code the site with React, TypeScript and Tailwind: clean components, responsive layout and no unnecessary bloat.' },
  { title: 'Launch', text: 'We push to GitHub, deploy on Vercel, check the production link, metadata, favicon and basic performance.' },
  { title: 'Improve', text: 'We refine texts, add real cases, AI widgets, animations, analytics and stronger conversion mechanics.' },
];

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
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-void/82 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#" onClick={closeMenu} className="group inline-flex items-center gap-3" aria-label="Elven Syndicate home">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-emerald/40 bg-white/[0.04] shadow-arcane">
              <img src={assets.logo} alt="" className="h-full w-full object-cover" width="48" height="48" />
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

          <button
            type="button"
            className="relative z-[110] grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] text-white shadow-violet transition hover:bg-white/12 md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="relative h-4 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'scale-x-0 opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[100] overflow-y-auto bg-void px-5 pb-8 pt-24 transition duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="pointer-events-none absolute inset-0">
          <img src={assets.background} alt="" className="h-full w-full object-cover opacity-25" width="1792" height="1024" />
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/95 to-void/90" />
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/25 blur-3xl" />
          <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald/20 blur-3xl" />
        </div>

        <div className={`relative mx-auto max-w-md transition duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="mb-7 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-emerald/40 bg-white/[0.04] shadow-arcane">
                <img src={assets.logo} alt="" className="h-full w-full object-cover" width="48" height="48" />
              </span>
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] text-white">ELVEN</p>
                <p className="text-xs uppercase tracking-[0.31em] text-mist">Syndicate</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.08] text-white transition hover:bg-white/12"
              aria-label="Close menu"
            >
              <span className="relative h-5 w-5">
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <nav className="grid gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.055] px-5 py-5 text-lg font-black text-white backdrop-blur-xl transition hover:border-emerald/35 hover:bg-emerald/10"
              >
                <span>{item.label}</span>
                <span className="text-emerald transition group-hover:translate-x-1">→</span>
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/ElvenSyndicateStudio"
            onClick={closeMenu}
            className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-emerald px-6 py-5 text-base font-black text-void shadow-[0_0_50px_rgba(29,242,178,.22)] transition hover:bg-[#68ffd5]"
          >
            Start a project
          </a>

          <p className="mx-auto mt-6 max-w-xs text-center text-sm leading-6 text-mist">
            Crafted with code, runes and artificial intelligence.
          </p>
        </div>
      </div>
    </>
  );
}


function SectionLabel({ children }: { children: string }) {
  return <p className="text-sm font-black uppercase tracking-[0.34em] text-emerald">{children}</p>;
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-void text-parchment">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-25">
        <img src={assets.background} alt="" className="h-full w-full object-cover" width="1792" height="1024" />
        <div className="absolute inset-0 bg-void/60" />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="relative isolate flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
            <div className="absolute bottom-20 left-[-120px] h-80 w-80 rounded-full bg-emerald/20 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-emerald/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-emerald backdrop-blur">
                Web · AI · Telegram funnels
              </p>

              <h1 className="max-w-4xl text-[clamp(2.65rem,12vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white lg:text-7xl">
                Websites and AI assistants with a dark fantasy edge.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">
                Elven Syndicate creates premium websites, AI sales assistants and Telegram-first systems that turn attention into clear, qualified requests.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="https://t.me/ElvenSyndicateStudio" className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald px-6 py-4 text-sm font-black text-void shadow-[0_0_50px_rgba(29,242,178,.22)] transition hover:-translate-y-0.5 hover:bg-[#68ffd5] sm:w-auto">
                  Discuss on Telegram
                </a>
                <a href="#services" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
                  Explore services
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                    <p className="text-xl font-black text-white sm:text-2xl">{item.value}</p>
                    <p className="mt-1 text-xs text-mist sm:text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[660px]">
              <div className="absolute -inset-6 rounded-[3rem] bg-emerald/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-arcane backdrop-blur">
                <img src={assets.hero} alt="Elven developer controlling holographic AI interfaces" className="h-full min-h-[300px] w-full object-cover object-center sm:min-h-[420px] lg:min-h-[460px]" width="1792" height="1024" />
                <div className="absolute inset-0 bg-gradient-to-r from-void/35 via-transparent to-void/5" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald">Arcane AI Core</p>
                  <p className="mt-2 text-sm leading-6 text-mist">A cinematic identity for premium websites, AI assistant interfaces and Telegram-first digital systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionLabel>About</SectionLabel>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                A fantasy-tech studio for premium web and AI experiences.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
                The project combines frontend development, visual storytelling and AI-ready architecture. It is built as a scalable foundation: strong visuals, clean components, mobile-first layout, clear sections and space for future effects, cases and assistant widgets.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">What we craft</h2>
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

        <section id="stack" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Stack</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Modern stack, clean delivery.</h2>
            </div>
            <div className="flex flex-wrap content-start gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[1.5rem] border border-violet/20 bg-black/30">
              <img src={assets.core} alt="Floating emerald crystal inside an arcane AI interface" className="h-full min-h-[240px] w-full object-cover sm:min-h-[320px]" width="1792" height="1024" loading="lazy" />
            </div>
            <div className="p-2 sm:p-6">
              <SectionLabel>Visual System</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                A magical interface language for AI-first websites.
              </h2>
              <p className="mt-6 text-lg leading-8 text-mist">
                Crystals, runes and holographic UI details become part of the brand system: premium enough for a studio, readable enough for a real business landing page.
              </p>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            From rough idea to production-ready digital system.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {process.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald/35">
                <p className="text-sm font-black text-gold">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-mist">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] border border-violet/20 bg-violet/10 p-8 shadow-violet backdrop-blur sm:p-12">
            <SectionLabel>Trust</SectionLabel>
            <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Designed to become a portfolio-grade project, not a temporary demo.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
              The next iterations will add refined animations, an AI assistant widget, real cases, testimonials, analytics and final copywriting for a production-ready presentation.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] border border-emerald/20 bg-emerald/10 p-8 text-center shadow-arcane backdrop-blur sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Ready to build your digital system?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-mist">
              Send your niche, goal, references and desired style. I’ll turn the idea into a strong website concept, clean frontend and AI-ready client flow.
            </p>
            <a href="https://t.me/ElvenSyndicateStudio" className="mt-8 inline-flex rounded-2xl bg-emerald px-7 py-4 font-black text-void transition hover:-translate-y-0.5 hover:bg-[#68ffd5]">
              Contact in Telegram
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-mist sm:px-6 lg:px-8">
          <img src={assets.logo} alt="" className="mx-auto mb-5 h-14 w-14 rounded-2xl object-cover" width="56" height="56" loading="lazy" />
          <p>© 2026 Elven Syndicate. All rights reserved.</p>
          <p className="mt-2">Built by Sergey · Web & AI Development</p>
          <p className="mt-2">Crafted with code, runes and artificial intelligence.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
