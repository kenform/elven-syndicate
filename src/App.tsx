import { useEffect, useState } from 'react';

type Lang = 'en' | 'ru';

type NavItem = {
  label: string;
  href: string;
};

type SimpleCard = {
  title: string;
  text: string;
};

type ServiceCard = SimpleCard & {
  icon: string;
  label: string;
};

type ProcessStep = SimpleCard;

type FAQItem = {
  question: string;
  answer: string;
};

type ContactCopy = {
  label: string;
  title: string;
  text: string;
  telegram: string;
  projectType: string;
  projectPlaceholder: string;
  goal: string;
  goalPlaceholder: string;
  submit: string;
  copied: string;
  briefTitle: string;
};

const assets = {
  logo: '/assets/logo-es.png',
  hero: '/assets/hero-visual.png',
  background: '/assets/bg-arcane.png',
  core: '/assets/core-visual.png',
};

const content = {
  en: {
    metaTitle: 'Elven Syndicate — Web & AI Studio',
    metaDescription: 'Premium websites, AI assistants and Telegram-first sales systems by Elven Syndicate.',
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Systems', href: '#business' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Portfolio', href: 'https://portfolio-pi-snowy-53.vercel.app' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Web · AI · Telegram funnels',
      title: 'Websites and AI assistants with a dark fantasy edge.',
      text: 'Elven Syndicate creates premium websites, AI sales assistants and Telegram-first systems that turn attention into clear, qualified requests.',
      primary: 'Discuss on Telegram',
      secondary: 'Explore services',
      coreTitle: 'Arcane AI Core',
      coreText: 'A cinematic identity for premium websites, AI assistant interfaces and Telegram-first digital systems.',
      stats: [
        { value: '24/7', label: 'assistant online' },
        { value: 'Fast', label: 'fast build' },
        { value: 'TG', label: 'lead handoff' },
      ],
    },
    about: {
      label: 'About',
      title: 'A fantasy-tech studio for premium web and AI experiences.',
      text: 'The project combines frontend development, visual storytelling and AI-ready architecture. It is built as a scalable foundation: strong visuals, clean components, mobile-first layout, clear sections and space for future effects, cases and assistant widgets.',
    },
    servicesIntro: {
      label: 'Services',
      title: 'What we craft',
      text: 'A premium website should not be just a set of blocks. It should create trust, explain the offer and move the visitor toward a clear next step.',
    },
    services: [
      {
        title: 'Premium websites',
        icon: 'WEB',
        label: 'Landing',
        text: 'Modern responsive websites with a strong first screen, clear offer, polished sections and a path toward a real request.',
      },
      {
        title: 'AI sales assistants',
        icon: 'AI',
        label: 'AI',
        text: 'Assistant interfaces that explain the offer, ask the right questions and prepare the client before the Telegram conversation.',
      },
      {
        title: 'Telegram funnels',
        icon: 'TG',
        label: 'Flow',
        text: 'A clean route from attention to contact: CTA, short qualification and a warmer message instead of an empty “hello”.',
      },
      {
        title: 'Brand systems',
        icon: 'ID',
        label: 'Identity',
        text: 'Visual language, structure and reusable sections that make the project feel like a premium studio product.',
      },
    ],
    business: {
      label: 'Business Systems',
      title: 'A website that behaves like a small sales system.',
      text: 'The goal is not just atmosphere. Each layer should help a visitor understand the offer, trust the project and move into Telegram with context.',
      coreTitle: 'Core idea',
      coreText: 'Visual identity + clear offer + AI assistant + Telegram handoff = a memorable first version of a real commercial web product.',
      items: [
        {
          title: 'AI sales layer',
          label: 'Assistant',
          text: 'A visible assistant that explains the offer, asks qualifying questions and prepares a warmer Telegram conversation.',
        },
        {
          title: 'Conversion-first landing',
          label: 'Website',
          text: 'A strong first screen, clear sections, trust blocks and CTA logic that help visitors understand what to do next.',
        },
        {
          title: 'Telegram request flow',
          label: 'Handoff',
          text: 'A lightweight path from interest to message: the user arrives in Telegram with context, not just “hello”.',
        },
        {
          title: 'Portfolio-grade presentation',
          label: 'Brand',
          text: 'Visual identity, atmosphere and motion that make the project feel like a premium studio product.',
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Clean frontend, fast deploy, AI-ready structure.',
      text: 'The current build stays lightweight: React for interface, Tailwind for visual system, Vercel for deployment and room for future API integrations.',
      groups: [
        {
          title: 'Interface',
          text: 'Reusable sections, responsive layout and clean component logic.',
          items: ['React', 'TypeScript', 'Tailwind'],
        },
        {
          title: 'Performance',
          text: 'Fast build, optimized assets and metadata ready for production.',
          items: ['Vite', 'Lazy media', 'SEO'],
        },
        {
          title: 'Deployment',
          text: 'Every push can become a new production or preview deployment.',
          items: ['GitHub', 'Vercel', 'Preview'],
        },
        {
          title: 'AI layer',
          text: 'The visible assistant can later connect to real AI and handoff flows.',
          items: ['Assistant', 'Telegram', 'Future API'],
        },
      ],
    },
    visual: {
      label: 'Visual System',
      title: 'A magical interface language for AI-first websites.',
      text: 'Crystals, runes and holographic UI details become part of the brand system: premium enough for a studio, readable enough for a real business landing page.',
    },
    cases: {
      label: 'Cases',
      title: 'Built for websites that need more than a pretty screen.',
      text: 'These are the first commercial scenarios for the project. Later they can become real cases, screenshots, numbers and client-style stories.',
      items: [
        {
          title: 'AI-ready landing',
          metric: 'Lead flow',
          text: 'A premium website concept where the assistant explains the offer, collects project context and moves the visitor to Telegram.',
        },
        {
          title: 'Expert portfolio',
          metric: 'Brand trust',
          text: 'A visual identity and portfolio-grade presentation for a developer, studio or specialist who wants to look more expensive.',
        },
        {
          title: 'Telegram-first funnel',
          metric: 'Fast contact',
          text: 'A simple path from first impression to conversation: clear CTA, quick qualification and handoff into Telegram.',
        },
      ],
    },
    process: {
      label: 'Process',
      title: 'From idea to launch without chaos.',
      text: 'A compact workflow: every step has a clear job, so the project does not turn into random blocks and last-minute fixes.',
      steps: [
        {
          title: 'Brief',
          text: 'We collect the goal, niche, references, target action and the exact feeling the website should create.',
        },
        {
          title: 'Concept',
          text: 'We turn the raw idea into structure: sections, offer, visual direction, CTA logic and content priorities.',
        },
        {
          title: 'Interface',
          text: 'We build the first strong screen, cards, rhythm, mobile layout and the core visual system of the project.',
        },
        {
          title: 'Development',
          text: 'We code the site with React, TypeScript and Tailwind: clean components, responsive layout and no unnecessary bloat.',
        },
        {
          title: 'Launch',
          text: 'We push to GitHub, deploy on Vercel, check the production link, metadata, favicon and basic performance.',
        },
        {
          title: 'Improve',
          text: 'We refine texts, add real cases, assistant logic, analytics and stronger conversion mechanics.',
        },
      ],
    },
    proof: {
      label: 'Proof',
      title: 'Built to turn attention into a serious conversation.',
      items: [
        {
          title: 'Premium first impression',
          text: 'The first screen, visuals and structure should make the project feel premium before the visitor reads every detail.',
          tag: 'Visual trust',
        },
        {
          title: 'Clear next action',
          text: 'The page guides the visitor from visual interest to a clear request, without forcing them through a heavy form.',
          tag: 'CTA logic',
        },
        {
          title: 'AI-ready structure',
          text: 'The assistant layer can qualify a client, collect context and prepare a better Telegram conversation.',
          tag: 'Sales system',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Questions before the first summon.',
      text: 'Short answers for visitors who want to understand how this project can work as a real commercial website.',
      items: [
        {
          question: 'Is the AI assistant real?',
          answer: 'The assistant is designed as a qualification layer for visitors. It can later be connected to a real AI API, Telegram bot or CRM flow.',
        },
        {
          question: 'Can this site be adapted for a real client?',
          answer: 'Yes. The structure is made for production: hero, services, cases, process, contact flow, metadata and responsive layout.',
        },
        {
          question: 'Can we add video, animations and stronger effects?',
          answer: 'Yes. The visual system already supports fantasy-tech images. Video loops and motion effects can be added carefully later.',
        },
        {
          question: 'Where do leads go?',
          answer: 'The current CTA sends users to Telegram. Later we can add form delivery, Telegram bot messages, email or CRM integration.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Ready to build your digital system?',
      text: 'Send your niche, goal, references and desired style. I’ll turn the idea into a strong website concept, clean frontend and AI-ready client flow.',
      telegram: 'Contact in Telegram',
      projectType: 'Project type',
      projectPlaceholder: 'Landing, AI assistant, portfolio...',
      goal: 'Main goal',
      goalPlaceholder: 'Tell me what the site should do...',
      submit: 'Copy brief and open Telegram',
      copied: 'Brief copied · Open Telegram',
      briefTitle: 'Elven Syndicate brief',
    },
    footer: {
      text: 'Fantasy-tech web and AI studio concept. Built as a portfolio-grade website with room for real assistant logic, cases and automation.',
      nav: 'Navigation',
      status: 'Build status',
      openTelegram: 'Open Telegram',
      built: 'Built by Sergey · Web & AI Development',
      crafted: 'Crafted with code, runes and artificial intelligence.',
      copyright: '© 2026 Elven Syndicate.',
    },
    assistant: {
      title: 'AI assistant',
      subtitle: 'Elven Syndicate Studio',
      intro: 'Hi. I am the Elven Syndicate assistant. Describe the website, AI assistant or Telegram funnel you want to build.',
      how: 'How it works',
      howText: 'This assistant flow shows how the site can qualify visitors, collect project context and move warm leads to Telegram.',
      quick: ['I need a website with AI assistant', 'I want Telegram lead funnel', 'I need portfolio-grade landing'],
      answer: 'Great. Next I would clarify your niche, target client, main action, visual references and how the request should reach Telegram.',
      placeholder: 'Describe your project...',
      send: 'Send',
      telegram: 'Continue in Telegram',
      button: 'Ask assistant',
    },
    ui: {
      startProject: 'Start a project',
      close: 'Close',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },
  ru: {
    metaTitle: 'Elven Syndicate — студия сайтов и AI',
    metaDescription: 'Премиальные сайты, AI-ассистенты и Telegram-воронки от Elven Syndicate.',
    nav: [
      { label: 'О проекте', href: '#about' },
      { label: 'Услуги', href: '#services' },
      { label: 'Системы', href: '#business' },
      { label: 'Витрина', href: '#showcase' },
      { label: 'Процесс', href: '#process' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Портфолио', href: 'https://portfolio-pi-snowy-53.vercel.app' },
      { label: 'Контакты', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Сайты · AI · Telegram-воронки',
      title: 'Сайты и AI-ассистенты в dark fantasy стиле.',
      text: 'Elven Syndicate создаёт премиальные сайты, AI-продавцов и Telegram-first системы, которые превращают внимание в понятные заявки.',
      primary: 'Обсудить в Telegram',
      secondary: 'Смотреть услуги',
      coreTitle: 'Arcane AI Core',
      coreText: 'Кинематографичная айдентика для премиальных сайтов, AI-интерфейсов и Telegram-first систем.',
      stats: [
        { value: '24/7', label: 'ассистент онлайн' },
        { value: 'Fast', label: 'быстрая сборка' },
        { value: 'TG', label: 'передача заявки' },
      ],
    },
    about: {
      label: 'О проекте',
      title: 'Fantasy-tech студия для премиальных сайтов и AI-интерфейсов.',
      text: 'Проект соединяет frontend-разработку, визуальный сторителлинг и AI-ready архитектуру. Это масштабируемая основа: сильный визуал, чистые компоненты, mobile-first вёрстка, понятные секции и место для будущих эффектов, кейсов и ассистентов.',
    },
    servicesIntro: {
      label: 'Услуги',
      title: 'Что я создаю',
      text: 'Премиальный сайт — это не просто набор блоков. Он должен вызывать доверие, объяснять предложение и вести человека к понятному следующему шагу.',
    },
    services: [
      {
        title: 'Премиальные сайты',
        icon: 'WEB',
        label: 'Landing',
        text: 'Современные адаптивные сайты с сильным первым экраном, понятным оффером, аккуратными секциями и маршрутом к заявке.',
      },
      {
        title: 'AI-продавцы',
        icon: 'AI',
        label: 'AI',
        text: 'Интерфейсы ассистентов, которые объясняют услугу, задают правильные вопросы и подготавливают клиента до перехода в Telegram.',
      },
      {
        title: 'Telegram-воронки',
        icon: 'TG',
        label: 'Flow',
        text: 'Чистый путь от интереса к контакту: CTA, быстрая квалификация и тёплое сообщение вместо пустого “привет”.',
      },
      {
        title: 'Бренд-системы',
        icon: 'ID',
        label: 'Identity',
        text: 'Визуальный язык, структура и переиспользуемые секции, которые делают проект похожим на продукт сильной студии.',
      },
    ],
    business: {
      label: 'Бизнес-системы',
      title: 'Сайт, который работает как небольшая система продаж.',
      text: 'Задача не только в атмосфере. Каждый слой должен помогать посетителю понять предложение, поверить проекту и перейти в Telegram уже с контекстом.',
      coreTitle: 'Главная идея',
      coreText: 'Айдентика + понятный оффер + AI-ассистент + Telegram-передача = запоминающаяся первая версия коммерческого web-продукта.',
      items: [
        {
          title: 'AI sales layer',
          label: 'Ассистент',
          text: 'Видимый ассистент объясняет предложение, задаёт квалифицирующие вопросы и готовит более тёплый диалог в Telegram.',
        },
        {
          title: 'Landing под конверсию',
          label: 'Сайт',
          text: 'Сильный первый экран, ясные секции, trust-блоки и CTA-логика помогают посетителю понять, что делать дальше.',
        },
        {
          title: 'Telegram request flow',
          label: 'Handoff',
          text: 'Лёгкий путь от интереса к сообщению: пользователь приходит в Telegram с контекстом, а не просто с “привет”.',
        },
        {
          title: 'Подача уровня портфолио',
          label: 'Бренд',
          text: 'Визуальная система, атмосфера и motion делают проект похожим на премиальный студийный продукт.',
        },
      ],
    },
    stack: {
      label: 'Стек',
      title: 'Чистый frontend, быстрый деплой, AI-ready структура.',
      text: 'Сборка остаётся лёгкой: React для интерфейса, Tailwind для визуальной системы, Vercel для деплоя и запас под будущие API-интеграции.',
      groups: [
        {
          title: 'Интерфейс',
          text: 'Переиспользуемые секции, адаптивная сетка и чистая компонентная логика.',
          items: ['React', 'TypeScript', 'Tailwind'],
        },
        {
          title: 'Скорость',
          text: 'Быстрая сборка, оптимизированные ассеты и метаданные для продакшена.',
          items: ['Vite', 'Lazy media', 'SEO'],
        },
        {
          title: 'Деплой',
          text: 'Каждый push может превращаться в production или preview-деплой.',
          items: ['GitHub', 'Vercel', 'Preview'],
        },
        {
          title: 'AI-слой',
          text: 'Видимый ассистент позже можно подключить к реальному AI и Telegram-сценариям.',
          items: ['Assistant', 'Telegram', 'Future API'],
        },
      ],
    },
    visual: {
      label: 'Визуальная система',
      title: 'Магический интерфейсный язык для AI-first сайтов.',
      text: 'Кристаллы, руны и голографические UI-детали становятся частью бренда: достаточно премиально для студии и достаточно понятно для бизнес-лендинга.',
    },
    cases: {
      label: 'Сценарии',
      title: 'Для сайтов, которым нужно больше, чем красивый экран.',
      text: 'Первые коммерческие сценарии проекта. Позже здесь могут быть реальные кейсы, скриншоты, цифры и истории клиентов.',
      items: [
        {
          title: 'AI-ready landing',
          metric: 'Lead flow',
          text: 'Премиальный сайт, где ассистент объясняет предложение, собирает контекст и переводит посетителя в Telegram.',
        },
        {
          title: 'Экспертное портфолио',
          metric: 'Brand trust',
          text: 'Айдентика и презентация уровня портфолио для разработчика, студии или специалиста, который хочет выглядеть дороже.',
        },
        {
          title: 'Telegram-first воронка',
          metric: 'Fast contact',
          text: 'Простой путь от первого впечатления к диалогу: понятный CTA, быстрая квалификация и передача в Telegram.',
        },
      ],
    },
    process: {
      label: 'Процесс',
      title: 'От идеи до запуска без хаоса.',
      text: 'Компактный workflow: у каждого этапа есть понятная задача, чтобы проект не превращался в случайные блоки и срочные костыли.',
      steps: [
        {
          title: 'Бриф',
          text: 'Собираем цель, нишу, референсы, целевое действие и ощущение, которое должен создавать сайт.',
        },
        {
          title: 'Концепция',
          text: 'Превращаем сырую идею в структуру: секции, оффер, визуальное направление, CTA-логику и приоритеты контента.',
        },
        {
          title: 'Интерфейс',
          text: 'Собираем сильный первый экран, карточки, ритм, мобильную версию и ядро визуальной системы.',
        },
        {
          title: 'Разработка',
          text: 'Пишем сайт на React, TypeScript и Tailwind: чистые компоненты, адаптивная вёрстка и без лишней тяжести.',
        },
        {
          title: 'Запуск',
          text: 'Пушим в GitHub, деплоим на Vercel, проверяем production-ссылку, метаданные, favicon и базовую скорость.',
        },
        {
          title: 'Улучшение',
          text: 'Дорабатываем тексты, добавляем кейсы, логику ассистента, аналитику и более сильные механики конверсии.',
        },
      ],
    },
    proof: {
      label: 'Доказательства',
      title: 'Сайт должен превращать внимание в серьёзный диалог.',
      items: [
        {
          title: 'Премиальное первое впечатление',
          text: 'Первый экран, визуалы и структура должны создавать ощущение дорогого проекта ещё до чтения деталей.',
          tag: 'Visual trust',
        },
        {
          title: 'Понятное следующее действие',
          text: 'Страница ведёт посетителя от интереса к заявке без тяжёлой формы и лишних барьеров.',
          tag: 'CTA logic',
        },
        {
          title: 'AI-ready структура',
          text: 'Ассистент может квалифицировать клиента, собрать контекст и подготовить более качественный диалог в Telegram.',
          tag: 'Sales system',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Частые вопросы перед стартом.',
      text: 'Короткие ответы для посетителей, которые хотят понять, как проект может работать как коммерческий сайт.',
      items: [
        {
          question: 'AI-ассистент настоящий?',
          answer: 'Ассистент спроектирован как слой квалификации посетителей. Позже его можно подключить к реальному AI API, Telegram-боту или CRM-сценарию.',
        },
        {
          question: 'Можно адаптировать сайт под реального клиента?',
          answer: 'Да. Структура уже рассчитана на продакшен: hero, услуги, кейсы, процесс, contact-flow, метаданные и адаптивная вёрстка.',
        },
        {
          question: 'Можно добавить видео, анимации и более сильные эффекты?',
          answer: 'Да. Визуальная система уже поддерживает fantasy-tech изображения. Видео-лупы и motion-эффекты можно аккуратно добавить позже.',
        },
        {
          question: 'Куда уходят заявки?',
          answer: 'Сейчас CTA ведёт в Telegram. Позже можно добавить отправку формы, Telegram bot messages, email или CRM-интеграцию.',
        },
      ],
    },
    contact: {
      label: 'Контакт',
      title: 'Готов собрать твою digital-систему?',
      text: 'Отправь нишу, цель, референсы и желаемый стиль. Я превращу идею в сильную концепцию сайта, чистый frontend и AI-ready клиентский сценарий.',
      telegram: 'Написать в Telegram',
      projectType: 'Тип проекта',
      projectPlaceholder: 'Лендинг, AI-ассистент, портфолио...',
      goal: 'Главная цель',
      goalPlaceholder: 'Что сайт должен делать?',
      submit: 'Скопировать бриф и открыть Telegram',
      copied: 'Бриф скопирован · открыть Telegram',
      briefTitle: 'Бриф Elven Syndicate',
    },
    footer: {
      text: 'Fantasy-tech студия сайтов и AI. Проект собран как сайт уровня портфолио с запасом под реального ассистента, кейсы и автоматизацию.',
      nav: 'Навигация',
      status: 'Статус сборки',
      openTelegram: 'Открыть Telegram',
      built: 'Built by Sergey · Web & AI Development',
      crafted: 'Crafted with code, runes and artificial intelligence.',
      copyright: '© 2026 Elven Syndicate.',
    },
    assistant: {
      title: 'AI-ассистент',
      subtitle: 'Elven Syndicate Studio',
      intro: 'Привет. Я ассистент Elven Syndicate. Опиши сайт, AI-ассистента или Telegram-воронку, которую хочешь собрать.',
      how: 'Как работает',
      howText: 'Этот сценарий показывает, как сайт может квалифицировать посетителей, собирать контекст проекта и переводить тёплые заявки в Telegram.',
      quick: ['Нужен сайт с AI-ассистентом', 'Хочу Telegram-воронку', 'Нужен сайт уровня портфолио'],
      answer: 'Отлично. Дальше я бы уточнил нишу, целевого клиента, главное действие, визуальные референсы и как заявка должна попадать в Telegram.',
      placeholder: 'Опиши проект...',
      send: 'Отправить',
      telegram: 'Продолжить в Telegram',
      button: 'Спросить ассистента',
    },
    ui: {
      startProject: 'Начать проект',
      close: 'Закрыть',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },
  },
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-sm font-black uppercase tracking-[0.34em] text-emerald">{children}</p>;
}

function LanguageToggle({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
      className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-violet/40 hover:bg-violet/10"
      aria-label="Switch language"
    >
      {lang === 'en' ? 'RU' : 'EN'}
    </button>
  );
}

function Header({
  lang,
  setLang,
  navItems,
  cta,
  ui,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  navItems: NavItem[];
  cta: string;
  ui: { openMenu: string; closeMenu: string };
}) {
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
              <span className="block text-xs font-black tracking-[0.22em] text-white sm:text-sm">ELVEN SYNDICATE</span>
              <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-mist">Web & AI Studio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative text-xs font-semibold text-mist transition duration-300 hover:text-white lg:text-sm"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 rounded-full bg-[#62d5d3] shadow-[0_0_14px_rgba(88,207,208,.34)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle lang={lang} setLang={setLang} />
            <a href="https://t.me/ElvenSyndicateStudio" className="rounded-full border border-emerald/35 bg-emerald/10 px-5 py-3 text-sm font-bold text-emerald transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-emerald hover:text-void hover:shadow-[0_0_34px_rgba(70,188,186,.18)]">
              {cta}
            </a>
          </div>

          <button
            type="button"
            className="relative z-[110] grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] text-white shadow-violet transition hover:bg-white/12 md:hidden"
            aria-label={isMenuOpen ? ui.closeMenu : ui.openMenu}
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
                <p className="text-xs font-black tracking-[0.22em] text-white">ELVEN SYNDICATE</p>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-mist">Web & AI Studio</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.08] text-white transition hover:bg-white/12"
              aria-label={ui.closeMenu}
            >
              <span className="relative h-5 w-5">
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <div className="mb-5 flex justify-end">
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>

          <nav className="grid gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
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
            className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-emerald px-6 py-5 text-base font-black text-void shadow-[0_0_50px_rgba(70,188,186,.22)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#8bdad8]"
          >
            {cta}
          </a>
        </div>
      </div>
    </>
  );
}

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border bg-white/[0.04] backdrop-blur premium-focus-ring ${
        isOpen ? 'border-emerald/35 shadow-[0_0_50px_rgba(70,188,186,.08)]' : 'border-white/10 hover:border-white/20'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white sm:text-xl">{item.question}</span>
        <span
          className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'border-emerald/45 bg-white/[0.10] shadow-[0_0_30px_rgba(70,188,186,.16)]' : 'border-white/15 bg-white/[0.08] hover:border-emerald/35'
          }`}
        >
          <span className={`absolute h-0.5 w-5 rounded-full bg-white transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
          <span className={`absolute h-0.5 w-5 rounded-full bg-white transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? '-rotate-45' : 'rotate-90'}`} />
        </span>
      </button>

      <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-7 text-mist">{item.answer}</p>
        </div>
      </div>
    </article>
  );
}

function ContactBrief({ copy, lang }: { copy: ContactCopy; lang: Lang }) {
  const [projectType, setProjectType] = useState('');
  const [goal, setGoal] = useState('');
  const [copied, setCopied] = useState(false);

  const brief = [
    copy.briefTitle,
    `${copy.projectType}: ${projectType || (lang === 'ru' ? 'не указано' : 'not specified')}`,
    `${copy.goal}: ${goal || (lang === 'ru' ? 'не указано' : 'not specified')}`,
  ].join('\n');

  const submitBrief = async () => {
    try {
      await navigator.clipboard?.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }

    window.open('https://t.me/ElvenSyndicateStudio', '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5 backdrop-blur"
      onSubmit={(event) => {
        event.preventDefault();
        submitBrief();
      }}
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-white">
          {copy.projectType}
          <input
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-mist/60 focus:border-violet/50"
            placeholder={copy.projectPlaceholder}
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white">
          {copy.goal}
          <textarea
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            className="min-h-28 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-mist/60 focus:border-violet/50"
            placeholder={copy.goalPlaceholder}
          />
        </label>

        <button
          type="submit"
          className="elven-premium-button inline-flex justify-center rounded-2xl px-5 py-4 text-sm font-black text-white transition duration-500"
        >
          {copied ? copy.copied : copy.submit}
        </button>
      </div>
    </form>
  );
}

function AssistantWidget({
  copy,
}: {
  copy: {
    title: string;
    subtitle: string;
    intro: string;
    how: string;
    howText: string;
    quick: string[];
    answer: string;
    placeholder: string;
    send: string;
    telegram: string;
    button: string;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', text: copy.intro }]);

  useEffect(() => {
    setMessages([{ role: 'assistant', text: copy.intro }]);
  }, [copy.intro]);

  const sendMessage = (text?: string) => {
    const value = (text ?? draft).trim();

    if (!value) return;

    setMessages((current) => [
      ...current,
      { role: 'user', text: value },
      { role: 'assistant', text: copy.answer },
    ]);

    setDraft('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div
        className={`fixed bottom-24 left-4 right-4 mx-auto max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-obsidian/95 shadow-violet backdrop-blur-2xl transition duration-300 md:left-auto md:right-5 md:w-[390px] ${
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <div className="border-b border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-emerald/35">
                <img src={assets.logo} alt="" className="h-full w-full object-cover" width="44" height="44" />
              </span>
              <div>
                <p className="text-sm font-black text-white">{copy.title}</p>
                <p className="text-xs text-mist">{copy.subtitle}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/12"
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>
        </div>

        <div className="max-h-[360px] space-y-3 overflow-y-auto p-5">
          <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4 text-xs leading-5 text-mist">
            <p className="font-black uppercase tracking-[0.22em] text-gold">{copy.how}</p>
            <p className="mt-2">{copy.howText}</p>
          </div>

          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`rounded-2xl border p-4 text-sm leading-6 ${
                message.role === 'assistant'
                  ? 'border-emerald/20 bg-emerald/10 text-emerald'
                  : 'ml-8 border-white/10 bg-white/[0.055] text-white'
              }`}
            >
              {message.text}
            </div>
          ))}

          <div className="flex flex-wrap gap-2 pt-1">
            {copy.quick.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-mist transition hover:border-emerald/35 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <form
          className="border-t border-white/10 p-4"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <label className="sr-only" htmlFor="assistant-message">Message</label>
          <div className="flex gap-2">
            <input
              id="assistant-message"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={copy.placeholder}
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/60 focus:border-emerald/50"
            />
            <button type="submit" className="rounded-2xl bg-emerald px-4 py-3 text-sm font-black text-void transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#8bdad8]">
              {copy.send}
            </button>
          </div>

          <a href="https://t.me/ElvenSyndicateStudio" className="mt-3 inline-flex w-full justify-center rounded-2xl border border-emerald/25 bg-emerald/10 px-4 py-3 text-sm font-black text-emerald transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-emerald hover:text-void hover:shadow-[0_0_34px_rgba(70,188,186,.18)]">
            {copy.telegram}
          </a>
        </form>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full border border-emerald/30 bg-emerald px-5 py-4 text-sm font-black text-void shadow-[0_0_50px_rgba(70,188,186,.28)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#8bdad8]"
        aria-label="Open AI assistant"
        aria-expanded={isOpen}
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-void/15 text-xs">AI</span>
        {copy.button}
      </button>
    </div>
  );
}


function StudioConsole({ lang }: { lang: Lang }) {
  const t = lang === 'ru'
    ? {
        label: 'Live System',
        title: 'Как заявка проходит через digital-систему.',
        text: 'Визуальная демонстрация будущей логики: сайт не просто красиво выглядит, а постепенно ведёт человека к понятному запросу.',
        action: 'Telegram handoff готов',
        status: 'System online',
        result: 'Запрос подготовлен',
        pipeline: [
          ['01', 'Первое касание', 'Посетитель понимает стиль, услугу и уровень подачи.'],
          ['02', 'Интерес', 'Hero, услуги и визуальные блоки объясняют ценность без перегруза.'],
          ['03', 'Квалификация', 'AI-ассистент или форма собирают нишу, цель и контекст.'],
          ['04', 'Передача', 'Клиент переходит в Telegram уже с понятной задачей.'],
        ],
        chips: ['Website', 'AI assistant', 'Telegram', 'Brief'],
      }
    : {
        label: 'Live System',
        title: 'How a request moves through the digital system.',
        text: 'A visual demonstration of the future flow: the site does not only look premium, it quietly guides a visitor toward a clear request.',
        action: 'Telegram handoff ready',
        status: 'System online',
        result: 'Request prepared',
        pipeline: [
          ['01', 'First impression', 'The visitor understands the style, service and quality level.'],
          ['02', 'Interest', 'Hero, services and visual blocks explain value without overload.'],
          ['03', 'Qualification', 'AI assistant or form collects niche, goal and project context.'],
          ['04', 'Handoff', 'The client moves to Telegram with a clear task, not an empty hello.'],
        ],
        chips: ['Website', 'AI assistant', 'Telegram', 'Brief'],
      };

  return (
    <section id="showcase" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-8 text-mist">{t.text}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_80px_rgba(109,85,216,.10)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,85,216,.18),transparent_32%),radial-gradient(circle_at_86%_80%,rgba(70,188,186,.12),transparent_36%)]" />
          <div className="relative rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">{t.status}</p>
                <p className="mt-2 text-xl font-semibold text-white">Elven workflow</p>
              </div>
              <span className="rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-black text-emerald">
                live
              </span>
            </div>

            <div className="grid gap-3">
              {t.pipeline.map(([number, title, text]) => (
                <article key={number} className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-violet/35 hover:bg-violet/10 sm:grid-cols-[4rem_1fr]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-sm font-black text-gold">
                    {number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-mist">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald/25 bg-emerald/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald">{t.action}</p>
              <p className="mt-2 text-sm text-mist">{t.result}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCards({ lang }: { lang: Lang }) {
  const t = lang === 'ru'
    ? {
        label: 'Results',
        title: 'Карточки результата вместо пустых отзывов.',
        text: 'Пока нет реальных клиентских отзывов, честнее показывать ожидаемые эффекты системы. Позже этот блок заменим настоящими кейсами и цитатами.',
        cards: [
          ['Понятнее заявка', 'Посетитель приходит в Telegram не с пустым “привет”, а с нишей, задачей и ожиданием.'],
          ['Дороже восприятие', 'Сайт выглядит как самостоятельный бренд, а не как случайный шаблон из блоков.'],
          ['Быстрее старт', 'Структура уже готова под реальные тексты, кейсы, аналитику и AI-интеграцию.'],
        ],
      }
    : {
        label: 'Results',
        title: 'Result cards instead of empty testimonials.',
        text: 'Until there are real client testimonials, the honest move is to show expected system outcomes. Later this section can become real cases and quotes.',
        cards: [
          ['Clearer request', 'The visitor enters Telegram with niche, goal and context — not just an empty hello.'],
          ['Premium perception', 'The site feels like a standalone brand, not a random collection of landing blocks.'],
          ['Faster iteration', 'The structure is ready for real copy, cases, analytics and AI integration.'],
        ],
      };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <SectionLabel>{t.label}</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{t.title}</h2>
        <p className="mt-5 text-lg leading-8 text-mist">{t.text}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {t.cards.map(([title, text], index) => (
          <article key={title} className="group relative min-h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/35">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-violet/15" />
            <div className="relative">
              <p className="mb-10 text-sm font-black text-gold">0{index + 1}</p>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-5 leading-7 text-mist">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



function ArcaneGlyphField() {
  const glyphs = [
    { mark: 'ᛟ', style: { left: '7%', top: '17%', animationDelay: '0s', fontSize: '22px' } },
    { mark: '✧', style: { left: '87%', top: '15%', animationDelay: '1.8s', fontSize: '18px' } },
    { mark: '◇', style: { left: '78%', top: '42%', animationDelay: '3.2s', fontSize: '26px' } },
    { mark: 'ᚱ', style: { left: '13%', top: '67%', animationDelay: '2.4s', fontSize: '19px' } },
    { mark: '◈', style: { left: '92%', top: '73%', animationDelay: '4.1s', fontSize: '21px' } },
    { mark: 'ᛉ', style: { left: '39%', top: '12%', animationDelay: '5s', fontSize: '16px' } },
    { mark: '✦', style: { left: '53%', top: '82%', animationDelay: '1.1s', fontSize: '18px' } },
  ];

  return (
    <div className="elven-glyph-field pointer-events-none fixed inset-0 z-[2]" aria-hidden="true">
      {glyphs.map((glyph, index) => (
        <span key={`${glyph.mark}-${index}`} className="elven-glyph" style={glyph.style}>
          {glyph.mark}
        </span>
      ))}
    </div>
  );
}


function App() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('elven-lang') === 'ru' ? 'ru' : 'en';
  });

  const copy = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = copy.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription);
    window.localStorage.setItem('elven-lang', lang);
  }, [copy.metaDescription, copy.metaTitle, lang]);

  return (
    <main className="min-h-screen overflow-hidden bg-void text-parchment">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-25">
        <img src={assets.background} alt="" className="h-full w-full object-cover" width="1792" height="1024" />
        <div className="absolute inset-0 bg-void/60" />
      </div>

      <div className="arcane-lines pointer-events-none fixed inset-0 z-[1]" />
      <ArcaneGlyphField />

      <div className="relative z-10">
        <Header lang={lang} setLang={setLang} navItems={copy.nav} cta={copy.ui.startProject} ui={copy.ui} />

        <section className="relative isolate flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
            <div className="absolute bottom-20 left-[-120px] h-80 w-80 rounded-full bg-emerald/20 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-emerald/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-emerald backdrop-blur">
                {copy.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-[clamp(2.65rem,12vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white lg:text-7xl">
                {copy.hero.title}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">
                {copy.hero.text}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="https://t.me/ElvenSyndicateStudio" className="elven-cta inline-flex w-full items-center justify-center rounded-2xl bg-emerald px-6 py-4 text-sm font-black text-void shadow-[0_0_50px_rgba(70,188,186,.22)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#8bdad8] sm:w-auto">
                  {copy.hero.primary}
                </a>
                <a href="#services" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/10 sm:w-auto">
                  {copy.hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {copy.hero.stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                    <p className="text-xl font-black text-white sm:text-2xl">{item.value}</p>
                    <p className="mt-1 text-xs text-mist sm:text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[660px]">
              <div className="absolute -inset-6 rounded-[3rem] bg-emerald/10 blur-3xl" />
              <div className="elven-float relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-arcane backdrop-blur">
                <img src={assets.hero} alt="Elven developer controlling holographic AI interfaces" className="h-full min-h-[300px] w-full object-cover object-center sm:min-h-[420px] lg:min-h-[460px]" width="1792" height="1024" />
                <div className="absolute inset-0 bg-gradient-to-r from-void/35 via-transparent to-void/5" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald">{copy.hero.coreTitle}</p>
                  <p className="mt-2 text-sm leading-6 text-mist">{copy.hero.coreText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionLabel>{copy.about.label}</SectionLabel>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.about.title}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">{copy.about.text}</p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <SectionLabel>{copy.servicesIntro.label}</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.servicesIntro.title}</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-mist lg:justify-self-end">{copy.servicesIntro.text}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {copy.services.map((item: ServiceCard) => (
              <article key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur premium-focus-ring hover:-translate-y-1 hover:border-violet/35">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet/10 blur-3xl transition group-hover:bg-emerald/12" />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-[0.68rem] font-black uppercase tracking-[0.22em] text-gold shadow-[0_0_35px_rgba(215,181,109,.08)]">
                      {item.icon}
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-mist">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-mist">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="business" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>{copy.business.label}</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.business.title}</h2>
              <p className="mt-5 text-lg leading-8 text-mist">{copy.business.text}</p>

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">{copy.business.coreTitle}</p>
                <p className="mt-3 leading-7 text-mist">{copy.business.coreText}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {copy.business.items.map((item, index) => (
                <article key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald/30">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald/10 blur-3xl transition group-hover:bg-violet/15" />
                  <div className="relative grid gap-5 sm:grid-cols-[4.5rem_1fr]">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-lg font-black text-gold">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                        <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.22em] text-emerald">
                          {item.label}
                        </span>
                      </div>
                      <p className="leading-7 text-mist">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur">
            <div className="grid gap-8 border-b border-white/10 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionLabel>{copy.stack.label}</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.stack.title}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-mist lg:justify-self-end">{copy.stack.text}</p>
            </div>

            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
              {copy.stack.groups.map((group) => (
                <article key={group.title} className="border-b border-white/10 p-6 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0">
                  <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-4 min-h-20 leading-7 text-mist">{group.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-bold text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
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
              <SectionLabel>{copy.visual.label}</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.visual.title}</h2>
              <p className="mt-6 text-lg leading-8 text-mist">{copy.visual.text}</p>
            </div>
          </div>
        </section>

        <StudioConsole lang={lang} />

        <section id="cases" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>{copy.cases.label}</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.cases.title}</h2>
            <p className="mt-5 text-lg leading-8 text-mist">{copy.cases.text}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {copy.cases.items.map((item) => (
              <article key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-violet/35">
                <p className="mb-8 inline-flex rounded-full border border-violet/25 bg-violet/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-violet">
                  {item.metric}
                </p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-mist">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>{copy.process.label}</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.process.title}</h2>
              <p className="mt-5 text-lg leading-8 text-mist">{copy.process.text}</p>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-emerald via-violet to-transparent" />

              <div className="grid gap-4">
                {copy.process.steps.map((item: ProcessStep, index: number) => (
                  <article key={item.title} className="group relative pl-16">
                    <div className="absolute left-6 top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-emerald/45 bg-void shadow-[0_0_24px_rgba(70,188,186,.28)]" />
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-emerald/30">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                          {lang === 'ru' ? 'Этап' : 'Step'} {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-3 leading-7 text-mist">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 text-center">
            <SectionLabel>{copy.proof.label}</SectionLabel>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.proof.title}</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {copy.proof.items.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet/35">
                <p className="mb-8 inline-flex rounded-full border border-violet/25 bg-violet/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-violet">
                  {item.tag}
                </p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-mist">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <ResultCards lang={lang} />

        <section id="faq" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>{copy.faq.label}</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.faq.title}</h2>
              <p className="mt-5 text-lg leading-8 text-mist">{copy.faq.text}</p>
            </div>

            <div className="grid gap-3">
              {copy.faq.items.map((item: FAQItem, index: number) => (
                <FAQAccordionItem key={item.question} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_0_80px_rgba(139,92,246,.08)] backdrop-blur sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-2 sm:p-4">
              <SectionLabel>{copy.contact.label}</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.contact.title}</h2>
              <p className="mt-5 max-w-2xl leading-8 text-mist">{copy.contact.text}</p>
              <a href="https://t.me/ElvenSyndicateStudio" className="mt-8 inline-flex w-full justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 font-black text-white transition duration-300 hover:border-violet/40 hover:bg-violet/10 sm:w-auto">
                {copy.contact.telegram}
              </a>
            </div>

            <ContactBrief copy={copy.contact} lang={lang} />
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-12 text-sm text-mist sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_1fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <img src={assets.logo} alt="" className="h-16 w-16 rounded-2xl object-cover shadow-arcane" width="64" height="64" loading="lazy" />
                <div>
                  <p className="text-xs font-black tracking-[0.22em] text-white">ELVEN SYNDICATE</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-mist">Web & AI Studio</p>
                </div>
              </div>
              <p className="mt-6 leading-7">{copy.footer.text}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur">
              <p className="font-black uppercase tracking-[0.25em] text-emerald">{copy.footer.nav}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {copy.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-mist transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur">
              <p className="font-black uppercase tracking-[0.25em] text-gold">{copy.footer.status}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vercel', lang === 'ru' ? 'AI ассистент' : 'AI assistant', 'Telegram'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-bold text-white">
                    {item}
                  </span>
                ))}
              </div>
              <a href="https://t.me/ElvenSyndicateStudio" className="elven-cta mt-6 inline-flex w-full justify-center rounded-2xl bg-emerald px-5 py-4 font-black text-void transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#8bdad8]">
                {copy.footer.openTelegram}
              </a>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-3 border-t border-white/10 pt-6 text-center sm:grid-cols-3 sm:text-left">
            <p>{copy.footer.copyright}</p>
            <p className="sm:text-center">{copy.footer.built}</p>
            <p className="sm:text-right">{copy.footer.crafted}</p>
          </div>
        </footer>

        <AssistantWidget copy={copy.assistant} />
      </div>
    </main>
  );
}

export default App;
