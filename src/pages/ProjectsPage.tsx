import { FolderGit2, ExternalLink, Github, Calendar, User } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { PROJECTS } from '@/data/portfolio';

// Map accent keys → Tailwind classes using the barbie palette
const ACCENT: Record<string, { badge: string; num: string }> = {
  bubblegum: { badge: 'bg-barbie-bubblegum', num: 'bg-barbie-bubblegum' },
  lavender:  { badge: 'bg-barbie-lavender',  num: 'bg-barbie-lavender'  },
  mauve:     { badge: 'bg-barbie-mauve',     num: 'bg-barbie-mauve'     },
  hot:       { badge: 'bg-barbie-hot text-white', num: 'bg-barbie-hot text-white' },
  pastel:    { badge: 'bg-barbie-pastel',    num: 'bg-barbie-pastel'    },
};

export function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="// things I've built"
        icon={<FolderGit2 size={32} className="text-ink" />}
        accent="bg-barbie-bubblegum"
      />

      {/* Intro Parallax */}
      <ParallaxBg
        image={IMAGES.womanCoding4}
        height="min-h-[40vh]"
        overlay="rgba(229,94,153,0.78)"
      >
        <div className="mx-auto flex min-h-[40vh] max-w-5xl items-center px-4 md:px-8">
          <div className="border-4 border-ink bg-white p-6 shadow-brutal-lg md:p-10">
            <p className="font-mono text-sm uppercase text-barbie-hot">Featured Work</p>
            <p className="mt-3 text-lg text-gray-700 md:text-2xl">
              A selection spanning <span className="font-bold text-barbie-hot">design systems, real-time UIs,
              payment portals, and data dashboards</span>. Each one solved a hard problem beautifully.
            </p>
          </div>
        </div>
      </ParallaxBg>

      {/* Grid */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => {
              const ac = ACCENT[project.accent] ?? ACCENT.bubblegum;
              return (
                <div
                  key={project.id}
                  className="brutal-card overflow-hidden shadow-brutal-hot"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden border-b-2 border-ink">
                    <img
                      src={IMAGES[project.image as keyof typeof IMAGES]}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-2 border-2 border-ink
                                    bg-white px-3 py-1 shadow-brutal-sm">
                      <Calendar size={14} />
                      <span className="font-mono text-xs font-bold">{project.year}</span>
                    </div>
                    <div className={`absolute bottom-0 left-0 border-t-2 border-r-2 border-ink
                                    px-4 py-1 ${ac.num}`}>
                      <span className="font-display text-sm font-bold uppercase text-ink">
                        #{String(project.id).padStart(2,'0')}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <User size={14} />
                      <span className="font-mono">{project.role}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">{project.description}</p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="border-2 border-ink bg-barbie-lavender
                                                   px-3 py-1 font-mono text-xs font-bold text-ink">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex gap-3">
                      <button className="flex items-center gap-2 border-2 border-ink bg-ink
                                         px-4 py-2 font-display text-sm font-bold uppercase
                                         text-white hover:bg-barbie-hot">
                        <Github size={16} /> Code
                      </button>
                      <button className="flex items-center gap-2 border-2 border-ink bg-white
                                         px-4 py-2 font-display text-sm font-bold uppercase
                                         text-ink hover:bg-barbie-bubblegum">
                        <ExternalLink size={16} /> Live
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="border-t-4 border-ink bg-barbie-hot py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
            Want to see more? Check out my GitHub.
          </p>
          <button className="mt-6 brutal-btn bg-barbie-bubblegum text-ink">
            <Github size={18} className="mr-2 inline" /> Visit GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
