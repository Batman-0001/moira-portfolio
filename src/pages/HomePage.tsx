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
      {/* Hero Section with Parallax */}
      <ParallaxBg
        image={IMAGES.heroCoding}
        height="min-h-screen"
        overlay="rgba(88, 28, 135, 0.85)"
      >
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-gray-900 bg-accent-yellow px-4 py-2 shadow-brutal">
              <Sparkles size={16} className="text-gray-900" />
              <span className="font-mono text-sm font-bold uppercase text-gray-900">
                Available for new opportunities
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
              {PROFILE.name.split(' ')[0]}
              <br />
              <span className="text-accent-yellow">{PROFILE.name.split(' ')[1]}</span>
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Terminal size={24} className="text-accent-yellow" />
              <p className="font-mono text-lg text-purple-100 md:text-xl">
                {PROFILE.title}
              </p>
            </div>

            <p className="mt-6 max-w-xl font-body text-lg text-purple-100 md:text-xl">
              {PROFILE.tagline} {PROFILE.bio.split('.')[1]}.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="brutal-btn bg-accent-yellow text-gray-900"
              >
                View Projects
                <ArrowRight size={18} className="ml-2 inline" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="brutal-btn bg-white text-gray-900"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-200">
                Scroll
              </span>
              <div className="h-12 w-8 rounded-full border-2 border-white">
                <div className="mx-auto mt-2 h-3 w-1 animate-bounce rounded-full bg-accent-yellow" />
              </div>
            </div>
          </div>
        </div>
      </ParallaxBg>

      {/* Marquee Banner */}
      <div className="border-y-4 border-gray-900 bg-accent-pink py-3">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center">
                {['TypeScript', 'React', 'Node.js', 'AWS', 'Kubernetes', 'GraphQL', 'Python', 'PostgreSQL', 'System Design', 'Leadership'].map((word) => (
                  <span key={word} className="mx-6 font-display text-xl font-bold uppercase text-gray-900">
                    {word} <span className="text-purple-700">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-purple-50 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Parallax speed={-0.05}>
              <div className="relative">
                <div className="brutal-border-4 bg-accent-yellow p-3 shadow-brutal-lg">
                  <img
                    src={IMAGES.portrait1}
                    alt={PROFILE.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center border-4 border-gray-900 bg-accent-pink shadow-brutal">
                  <Code2 size={40} className="text-gray-900" />
                </div>
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center border-4 border-gray-900 bg-accent-cyan shadow-brutal">
                  <Zap size={28} className="text-gray-900" />
                </div>
              </div>
            </Parallax>

            <div>
              <div className="mb-4 inline-block border-2 border-gray-900 bg-white px-4 py-1 font-mono text-sm font-bold uppercase shadow-brutal-sm">
                About Me
              </div>
              <h2 className="font-display text-4xl font-bold uppercase text-gray-900 md:text-5xl">
                Hi, I'm <span className="text-purple-600">Dishaditya</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {PROFILE.bio}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                I've spent my career building products that scale to millions of users,
                leading engineering teams, and championing inclusive tech culture.
                When I'm not shipping code, you'll find me mentoring junior engineers,
                speaking at conferences, or tinkering with retro hardware.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="brutal-border bg-white p-4 text-center shadow-brutal">
                  <div className="font-display text-3xl font-bold text-purple-600">8+</div>
                  <div className="font-mono text-xs uppercase text-gray-600">Years Exp</div>
                </div>
                <div className="brutal-border bg-white p-4 text-center shadow-brutal">
                  <div className="font-display text-3xl font-bold text-purple-600">50+</div>
                  <div className="font-mono text-xs uppercase text-gray-600">Projects</div>
                </div>
                <div className="brutal-border bg-white p-4 text-center shadow-brutal">
                  <div className="font-display text-3xl font-bold text-purple-600">12+</div>
                  <div className="font-mono text-xs uppercase text-gray-600">Talks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Parallax Background */}
      <ParallaxBg
        image={IMAGES.retroComputer}
        height="min-h-[80vh]"
        overlay="rgba(26, 26, 26, 0.9)"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block border-2 border-white bg-purple-600 px-4 py-1 font-mono text-sm font-bold uppercase text-white shadow-brutal">
              Tech Stack
            </div>
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Skills & Tools
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="brutal-border bg-white p-4 shadow-brutal">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display font-bold text-gray-900">{skill.name}</span>
                  <span className="font-mono text-sm text-purple-600">{skill.level}%</span>
                </div>
                <div className="h-4 border-2 border-gray-900 bg-purple-100">
                  <div
                    className="h-full bg-purple-600 transition-all duration-1000"
                    style={{ width: `${skill.level}%`, transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxBg>

      {/* CTA Section */}
      <section className="bg-accent-yellow py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <Parallax speed={0.1}>
            <h2 className="font-display text-4xl font-bold uppercase text-gray-900 md:text-6xl">
              Let's Build Something
              <br />
              <span className="text-purple-700">Extraordinary</span>
            </h2>
          </Parallax>
          <p className="mt-6 text-lg text-gray-800">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="brutal-btn bg-purple-600 text-white"
            >
              Start a Conversation
              <ArrowRight size={18} className="ml-2 inline" />
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="brutal-btn bg-white text-gray-900"
            >
              View Experience
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
