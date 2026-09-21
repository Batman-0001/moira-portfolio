import { ArrowRight, Code2, Sparkles, Zap, Terminal } from 'lucide-react';
import { ParallaxBg, Parallax } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { PROFILE, SKILLS } from '@/data/portfolio';
import type { PageId } from '@/components/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <ParallaxBg
        image={IMAGES.heroCoding}
        height="min-h-screen"
        overlay="rgba(229,94,153,0.82)"
      >
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-ink
                            bg-barbie-bubblegum px-4 py-2 shadow-brutal">
              <Sparkles size={16} className="text-ink" />
              <span className="font-mono text-sm font-bold uppercase text-ink">
                Available for new opportunities
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold uppercase leading-none
                           tracking-tight text-white md:text-7xl lg:text-8xl">
              {PROFILE.name.split(' ')[0]}
              <br />
              <span className="text-barbie-bubblegum">{PROFILE.name.split(' ')[1]}</span>
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Terminal size={24} className="text-barbie-bubblegum" />
              <p className="font-mono text-lg text-white/90 md:text-xl">{PROFILE.title}</p>
            </div>

            <p className="mt-6 max-w-xl font-body text-lg text-white/80 md:text-xl">
              {PROFILE.tagline}&nbsp;{PROFILE.bio.split('.')[1]}.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="brutal-btn bg-barbie-bubblegum text-ink"
              >
                View Projects <ArrowRight size={18} className="ml-2 inline" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="brutal-btn bg-white text-ink"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">Scroll</span>
              <div className="h-12 w-8 rounded-full border-2 border-white">
                <div className="mx-auto mt-2 h-3 w-1 animate-bounce rounded-full bg-barbie-bubblegum" />
              </div>
            </div>
          </div>
        </div>
      </ParallaxBg>

      {/* ── Marquee Banner ───────────────────────────────── */}
      <div className="border-y-4 border-ink bg-barbie-lavender py-3">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center">
                {['TypeScript','React','Next.js','CSS','Tailwind','Figma','GraphQL','Storybook','Jest','A11y'].map((word) => (
                  <span key={word} className="mx-6 font-display text-xl font-bold uppercase text-ink">
                    {word} <span className="text-barbie-hot">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">

            <Parallax speed={-0.05}>
              <div className="relative">
                <div className="border-4 border-ink bg-barbie-bubblegum p-3 shadow-brutal-lg">
                  <img
                    src={IMAGES.portrait1}
                    alt={PROFILE.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center
                                justify-center border-4 border-ink bg-barbie-pastel shadow-brutal">
                  <Code2 size={40} className="text-ink" />
                </div>
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center
                                justify-center border-4 border-ink bg-barbie-mauve shadow-brutal">
                  <Zap size={28} className="text-ink" />
                </div>
              </div>
            </Parallax>

            <div>
              <div className="mb-4 inline-block border-2 border-ink bg-white px-4 py-1
                              font-mono text-sm font-bold uppercase shadow-brutal-sm">
                About Me
              </div>
              <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
                Hi, I'm <span className="text-barbie-hot">Moira</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">{PROFILE.bio}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                I've spent my career building products that scale to millions of users,
                leading design systems, and championing inclusive, accessible tech.
                When I'm not shipping code, you'll find me mentoring junior devs,
                speaking at conferences, or pixel-hunting on a passion project.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[['8+','Years Exp'],['50+','Projects'],['12+','Talks']].map(([num, label]) => (
                  <div key={label} className="border-2 border-ink bg-white p-4 text-center shadow-brutal">
                    <div className="font-display text-3xl font-bold text-barbie-hot">{num}</div>
                    <div className="font-mono text-xs uppercase text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills (parallax bg) ─────────────────────────── */}
      <ParallaxBg
        image={IMAGES.retroComputer}
        height="min-h-[80vh]"
        overlay="rgba(26,26,26,0.88)"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block border-2 border-white bg-barbie-hot
                            px-4 py-1 font-mono text-sm font-bold uppercase text-white shadow-brutal">
              Tech Stack
            </div>
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Skills & Tools
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="border-2 border-ink bg-white p-4 shadow-brutal">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display font-bold text-ink">{skill.name}</span>
                  <span className="font-mono text-sm text-barbie-hot">{skill.level}%</span>
                </div>
                <div className="h-4 border-2 border-ink bg-barbie-bubblegum/30">
                  <div
                    className="h-full bg-barbie-hot transition-all duration-1000"
                    style={{ width: `${skill.level}%`, transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxBg>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-barbie-bubblegum py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <Parallax speed={0.1}>
            <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-6xl">
              Let's Build Something
              <br />
              <span className="text-barbie-hot">Extraordinary</span>
            </h2>
          </Parallax>
          <p className="mt-6 text-lg text-ink/80">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="brutal-btn bg-barbie-hot text-white"
            >
              Start a Conversation <ArrowRight size={18} className="ml-2 inline" />
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="brutal-btn bg-white text-ink"
            >
              View Experience
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
