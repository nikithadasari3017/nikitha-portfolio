import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Code2, Database, Wrench, Sparkles, Github, Mail, Phone, MapPin,
  Linkedin, Download, ArrowRight, ExternalLink, Cpu, Cloud, Brain,
  Layers, Server, GitBranch, Zap, Award, GraduationCap, Languages,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dasari Nikitha — Full Stack Developer & Cloud Enthusiast" },
      { name: "description", content: "Portfolio of Dasari Nikitha — Full Stack Developer, Cloud & Data Analyst building futuristic, scalable web experiences." },
      { property: "og:title", content: "Dasari Nikitha — Full Stack Developer" },
      { property: "og:description", content: "Cyberpunk-inspired portfolio showcasing projects, skills and experience." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" },
    ],
  }),
  component: Portfolio,
});

const ROLES = ["Full Stack Developer", "Java Developer", "Problem Solver", "AI Enthusiast", "Cloud & Data Analyst"];

function TypingText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setIdx((idx + 1) % ROLES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="font-mono text-[color:var(--cyan)]">
      {text}<span className="animate-blink text-[color:var(--neon)]">|</span>
    </span>
  );
}

function Nav() {
  const links = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
    ["Experience", "#experience"], ["Education", "#education"], ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-bold tracking-widest">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-[color:var(--primary-foreground)]">DN</span>
          <span className="hidden sm:inline text-gradient">NIKITHA.DEV</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="rounded-lg px-3 py-1.5 text-muted-foreground transition hover:text-foreground hover:bg-white/5">{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2 text-xs font-semibold text-[color:var(--primary-foreground)] transition hover:opacity-90">
          Hire Me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--neon)] opacity-20 blur-3xl animate-drift" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[color:var(--cyan)] opacity-15 blur-3xl animate-drift" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[color:var(--neon-soft)] opacity-15 blur-3xl animate-drift" style={{ animationDelay: "10s" }} />
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i}
          className="absolute h-1 w-1 rounded-full bg-[color:var(--cyan)] animate-glow"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 6) * 0.4}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-4 pt-28 pb-20">
      <Particles />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-[color:var(--cyan)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--cyan)] animate-glow" />
            AVAILABLE FOR OPPORTUNITIES · 2026 GRADUATE
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05]">
            <span className="text-gradient">DASARI</span><br />
            <span className="text-foreground">NIKITHA</span>
          </h1>
          <p className="mt-4 font-mono text-xs sm:text-sm tracking-[0.3em] text-[color:var(--neon)]">
            CLOUD COMPUTING INTERN · FULL STACK DEVELOPER
          </p>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
            Building the future with code.
          </p>
          <div className="mt-3 text-lg sm:text-xl">
            <span className="text-muted-foreground">I'm a </span>
            <TypingText />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] transition hover:scale-[1.02]" style={{ boxShadow: "var(--shadow-neon)" }}>
              View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-6 py-3 text-sm font-semibold transition hover:border-[color:var(--neon)] hover:text-[color:var(--cyan)]">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
          <div className="mt-10 flex gap-8 text-xs font-mono text-muted-foreground">
            <div><div className="text-2xl font-bold text-foreground">7.6</div>CGPA</div>
            <div><div className="text-2xl font-bold text-foreground">2+</div>PROJECTS</div>
            <div><div className="text-2xl font-bold text-foreground">10+</div>TECHNOLOGIES</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square max-w-sm">
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl animate-glow" />
            <div className="glass relative h-full w-full rounded-3xl p-6 animate-float">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>~/nikitha</span>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>
              </div>
              <pre className="mt-4 font-mono text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
{`> const dev = {
  name: "Dasari Nikitha",
  role: "Full Stack Dev",
  stack: ["Java", "React",
    "Spring", "Node"],
  cloud: "AWS · Azure",
  passion: "AI · ML · Data",
  status: "shipping ✨"
};`}
              </pre>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-[color:var(--border)] bg-black/30 px-3 py-2 font-mono text-[11px]">
                <span className="text-[color:var(--cyan)]">$</span>
                <span className="text-foreground">npm run future</span>
                <span className="animate-blink text-[color:var(--neon)]">▌</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { label: "Fresher", icon: Sparkles },
    { label: "B.Tech CSE", icon: GraduationCap },
    { label: "Graduating 2027", icon: Award },
    { label: "Fast Learner", icon: Zap },
    { label: "Team Player", icon: Cpu },
  ];
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="01 / ABOUT" title="About Me" />
        <div className="mt-12 grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="glass rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hi, I'm <span className="text-foreground font-semibold">Dasari Nikitha</span> — a passionate
              {" "}<span className="text-[color:var(--cyan)]">Full Stack Developer</span> and Cloud & Data Analyst focused on building modern, scalable, and user-friendly web applications.
              I enjoy turning ideas into real digital solutions through clean code and creative design.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Currently, I'm continuously learning and improving my skills across both frontend and backend technologies,
              with a strong interest in <span className="text-[color:var(--neon)]">cloud computing, data analytics</span> and AI — working toward becoming an industry-ready developer.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
              {["Python", "Java", "React", "Spring Boot", "AWS", "ML"].map(t => (
                <span key={t} className="rounded-md border border-[color:var(--border)] bg-white/5 px-3 py-1 text-[color:var(--cyan)]">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[color:var(--neon)] ${i === 4 ? "col-span-2" : ""}`}>
                <s.icon className="h-6 w-6 text-[color:var(--cyan)]" />
                <div className="mt-3 font-display text-sm font-bold">{s.label}</div>
                <div className="mt-1 font-mono text-[10px] text-muted-foreground">/0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-xs tracking-[0.3em] text-[color:var(--neon)]">{kicker}</div>
      <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mt-3 h-px w-24 bg-[image:var(--gradient-primary)]" />
    </div>
  );
}

const SKILLS = [
  { cat: "Frontend", icon: Layers, color: "var(--cyan)", items: [
    { n: "HTML5 / CSS3", v: 90 }, { n: "JavaScript", v: 80 },
    { n: "React", v: 75 }, { n: "Tailwind CSS", v: 85 }, { n: "Bootstrap", v: 80 },
  ]},
  { cat: "Backend", icon: Server, color: "var(--neon)", items: [
    { n: "Java", v: 85 }, { n: "Spring Boot", v: 70 },
    { n: "Node.js", v: 70 }, { n: "Express.js", v: 65 },
  ]},
  { cat: "Database", icon: Database, color: "var(--cyan)", items: [
    { n: "MySQL", v: 80 }, { n: "MongoDB", v: 70 },
  ]},
  { cat: "Tools & Cloud", icon: Wrench, color: "var(--neon)", items: [
    { n: "Git / GitHub", v: 85 }, { n: "REST APIs", v: 80 },
    { n: "VS Code", v: 95 }, { n: "AWS / Cloud", v: 70 },
  ]},
  { cat: "Other", icon: Brain, color: "var(--cyan)", items: [
    { n: "OOP & DSA", v: 80 }, { n: "Problem Solving", v: 85 }, { n: "Responsive Design", v: 90 },
  ]},
];

function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="02 / TECH STACK" title="Skills & Expertise" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.cat} className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[color:var(--neon)]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border)] bg-black/30" style={{ color: `oklch(0.85 0.16 200)` }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.cat}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {s.items.map((it) => (
                  <li key={it.n}>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-muted-foreground">{it.n}</span>
                      <span className="text-[color:var(--cyan)]">{it.v}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-all duration-700 group-hover:opacity-100" style={{ width: `${it.v}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Fake News Detection System",
    tag: "Machine Learning",
    desc: "Built an ML model to classify news as real or fake using Python. Applied text preprocessing, NLP techniques and trained models on curated news datasets for reliable classification.",
    stack: ["Python", "ML", "NLP", "LightGBM", "SHAP"],
    icon: Brain,
  },
  {
    title: "Personal Portfolio Website",
    tag: "Web Development",
    desc: "Designed and developed a responsive personal portfolio using HTML & CSS to showcase skills, projects and contact info — with a clean, recruiter-friendly layout.",
    stack: ["HTML5", "CSS3", "Responsive"],
    icon: Code2,
  },
  {
    title: "E-Commerce Web App",
    tag: "Full Stack · Upcoming",
    desc: "A full stack e-commerce platform with product catalog, cart, secure auth and order workflow — built using React on the frontend and Spring Boot REST APIs on the backend.",
    stack: ["React", "Spring Boot", "MySQL", "JWT"],
    icon: Layers,
  },
  {
    title: "Cloud Analytics Dashboard",
    tag: "Cloud · Data · Upcoming",
    desc: "An interactive analytics dashboard pulling data from cloud services to visualize KPIs in real time with rich charts and filters for decision makers.",
    stack: ["Node.js", "AWS", "MongoDB", "Charts"],
    icon: Cloud,
  },
];

function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="03 / WORK" title="Featured Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="glass group relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-2 hover:border-[color:var(--neon)]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[image:var(--gradient-primary)] opacity-10 blur-3xl transition group-hover:opacity-30" />
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--border)] bg-black/30 text-[color:var(--cyan)]">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[color:var(--neon)]">PRJ_0{i + 1}</span>
              </div>
              <div className="mt-5 font-mono text-[10px] tracking-widest text-muted-foreground">{p.tag.toUpperCase()}</div>
              <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="rounded-md border border-[color:var(--border)] bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[color:var(--cyan)]">{s}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition hover:text-[color:var(--cyan)]">
                  <ExternalLink className="h-3.5 w-3.5" /> View Case
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground">
                  <Github className="h-3.5 w-3.5" /> Source
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    {
      role: "Cloud Computing Intern",
      org: "Self-Driven · 2025",
      desc: "Exploring AWS and Azure fundamentals, deploying full stack applications and building serverless workflows.",
    },
    {
      role: "Personal Portfolio Website",
      org: "Project · 2024",
      desc: "Developed a responsive site with About, Skills, Projects and Contact sections for a recruiter-friendly experience.",
    },
    {
      role: "Fake News Detection System",
      org: "ML Project · 2024",
      desc: "Built and evaluated NLP models to classify news authenticity, including preprocessing pipelines and dataset curation.",
    },
  ];
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="04 / JOURNEY" title="Experience" />
        <div className="mt-12 relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--neon)] via-[color:var(--cyan)] to-transparent" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <div key={it.role} className={`relative grid gap-4 md:grid-cols-2 ${i % 2 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className="absolute left-3 md:left-1/2 top-4 -translate-x-1/2 h-3 w-3 rounded-full bg-[color:var(--neon)] ring-4 ring-[color:var(--background)]" style={{ boxShadow: "var(--shadow-neon)" }} />
                <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="glass inline-block rounded-2xl p-5">
                    <div className="font-mono text-[10px] tracking-widest text-[color:var(--cyan)]">{it.org}</div>
                    <h3 className="mt-1 font-display text-lg font-bold">{it.role}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="05 / LEARN" title="Education & Interests" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { school: "Prathyusha Engineering College", deg: "B.Tech — Computer Science & Engineering", time: "2023 – 2027", score: "CGPA · 7.6" },
            { school: "Vowel Jr College", deg: "Intermediate · MPC", time: "2021 – 2023", score: "85%" },
          ].map(e => (
            <div key={e.school} className="glass rounded-2xl p-6 transition hover:border-[color:var(--neon)]">
              <GraduationCap className="h-6 w-6 text-[color:var(--cyan)]" />
              <div className="mt-3 font-mono text-[10px] tracking-widest text-[color:var(--neon)]">{e.time}</div>
              <h3 className="mt-1 font-display text-lg font-bold">{e.school}</h3>
              <p className="text-sm text-muted-foreground">{e.deg}</p>
              <div className="mt-3 inline-block rounded-md border border-[color:var(--border)] bg-white/5 px-3 py-1 font-mono text-xs text-[color:var(--cyan)]">{e.score}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <Award className="h-6 w-6 text-[color:var(--cyan)]" />
            <h3 className="mt-3 font-display font-bold">Certifications</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>· Generative AI</li>
              <li>· UI / UX Design</li>
              <li>· Data Structures & Algorithms</li>
              <li>· Python Development</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <Languages className="h-6 w-6 text-[color:var(--cyan)]" />
            <h3 className="mt-3 font-display font-bold">Languages</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>· English</li>
              <li>· Tamil</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <Sparkles className="h-6 w-6 text-[color:var(--cyan)]" />
            <h3 className="mt-3 font-display font-bold">Interests</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>· Editing & Design</li>
              <li>· Sports</li>
              <li>· Learning New Things</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="06 / CONNECT" title="Let's Build Together" />
        <div className="mt-12 glass relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="font-display text-2xl font-bold">Ready to collaborate?</h3>
              <p className="mt-3 text-muted-foreground">
                I'm open to internships, full-time roles and exciting freelance projects. Drop a line and let's create something futuristic.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href="mailto:nikees1789@gmail.com" className="flex items-center gap-3 transition hover:text-[color:var(--cyan)]">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border)] bg-black/30"><Mail className="h-4 w-4" /></span>
                  nikees1789@gmail.com
                </a>
                <a href="tel:+917997661789" className="flex items-center gap-3 transition hover:text-[color:var(--cyan)]">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border)] bg-black/30"><Phone className="h-4 w-4" /></span>
                  +91 7997661789
                </a>
                <a href="https://linkedin.com/in/dasari-nikitha-549564332" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[color:var(--cyan)]">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border)] bg-black/30"><Linkedin className="h-4 w-4" /></span>
                  /dasari-nikitha-549564332
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border)] bg-black/30"><MapPin className="h-4 w-4" /></span>
                  Nellore, India
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="font-mono text-[10px] tracking-widest text-[color:var(--neon)]">NAME</label>
                <input className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--neon)]" placeholder="Your name" />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest text-[color:var(--neon)]">EMAIL</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--neon)]" placeholder="you@email.com" />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest text-[color:var(--neon)]">MESSAGE</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--neon)]" placeholder="Tell me about your project..." />
              </div>
              <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] transition hover:scale-[1.01]" style={{ boxShadow: "var(--shadow-neon)" }}>
                Send Message <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="font-mono">© 2026 DASARI NIKITHA · BUILT WITH <span className="text-[color:var(--cyan)]">REACT</span> & <span className="text-[color:var(--neon)]">PASSION</span></div>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:nikees1789@gmail.com" className="transition hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Keep import to avoid tree-shake warnings on unused icons we may add later
void GitBranch;
