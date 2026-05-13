import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const features = [
  'AI sales assistants',
  'Premium landing pages',
  'Telegram-first funnels',
  'Fast adaptive interfaces',
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-void/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" onClick={closeMenu} className="group inline-flex items-center gap-3" aria-label="Elven Syndicate Studio home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald/30 bg-white/5 text-sm font-black text-gold shadow-arcane">
            ES
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.22em] text-white">ELVEN</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-mist">Syndicate Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-mist transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/ElvenSyndicateStudio"
          className="hidden rounded-full border border-emerald/30 bg-emerald/10 px-5 py-3 text-sm font-semibold text-emerald transition hover:bg-emerald hover:text-void md:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          className="relative z-[70] grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition md:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-4 top-24 z-[60] w-[calc(100%-2rem)] max-w-sm rounded-[1.75rem] border border-white/10 bg-obsidian/95 p-5 shadow-violet transition md:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <nav className="grid gap-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-2xl px-4 py-4 text-base font-semibold text-white transition hover:bg-white/10">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/ElvenSyndicateStudio"
          onClick={closeMenu}
          className="mt-5 inline-flex w-full justify-center rounded-2xl bg-emerald px-5 py-4 text-sm font-bold text-void transition hover:bg-[#68ffd5]"
        >
          Start a project
        </a>
      </aside>
    </header>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-void text-parchment">
      <Header />

      <section className="relative isolate flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald/10" />
          <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/10" />
          <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
          <div className="absolute bottom-20 left-[-120px] h-80 w-80 rounded-full bg-emerald/20 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-emerald/20 bg-white/[0.04] px-4 py-2 text-sm text-emerald backdrop-blur">
              Web · AI · Telegram funnels
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              AI-powered websites crafted with code, runes and intelligence.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">
              Elven Syndicate Studio creates premium landing pages, AI sales assistants and digital systems that turn attention into qualified requests.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="https://t.me/ElvenSyndicateStudio" className="inline-flex items-center justify-center rounded-2xl bg-emerald px-6 py-4 text-sm font-bold text-void shadow-[0_0_50px_rgba(29,242,178,.22)] transition hover:-translate-y-0.5 hover:bg-[#68ffd5]">
                Discuss on Telegram
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
                Explore services
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-mist backdrop-blur">
                  <span className="mr-2 text-gold">✦</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            <div className="absolute inset-0 rounded-full border border-gold/25 bg-gradient-to-br from-emerald/10 via-violet/10 to-gold/10 shadow-arcane" />
            <div className="absolute inset-8 rounded-full border border-emerald/20" />
            <div className="absolute inset-16 rounded-full border border-violet/20" />
            <div className="absolute inset-24 rounded-full border border-gold/20" />
            <div className="absolute left-1/2 top-1/2 h-44 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[50%_50%_44%_44%] bg-gradient-to-b from-emerald via-cyan-200 to-violet shadow-[0_0_90px_rgba(29,242,178,.42)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="mt-56 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.35em] text-emerald backdrop-blur">
                Arcane AI Core
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">About</p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              A studio prototype for premium web and AI experiences.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
              This foundation is intentionally clean: scalable sections, reusable visual language, fast loading and no heavy animation libraries at the start.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">What we build</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {['Landing pages', 'AI assistants', 'Telegram funnels'].map((item) => (
            <article key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="mb-8 h-12 w-12 rounded-2xl border border-gold/25 bg-gold/10" />
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-4 leading-7 text-mist">
                Placeholder direction for future content. Clean, adaptive and designed for real business use.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">Process</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Brief, concept, interface, development, launch, improvement.
          </h2>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald/20 bg-emerald/10 p-8 text-center shadow-arcane sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Ready to summon your digital system?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-mist">
            Tell us your niche, goal, references and desired style. The next iteration will turn this prototype into a full production-ready website.
          </p>
          <a href="https://t.me/ElvenSyndicateStudio" className="mt-8 inline-flex rounded-2xl bg-emerald px-7 py-4 font-bold text-void transition hover:-translate-y-0.5 hover:bg-[#68ffd5]">
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
