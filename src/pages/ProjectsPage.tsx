import { FolderGit2, ExternalLink, Github, Calendar, User } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { PROJECTS } from '@/data/portfolio';

const ACCENT_MAP: Record<string, { bg: string; shadow: string; text: string }> = {
  cyan: { bg: 'bg-accent-cyan', shadow: 'shadow-brutal-cyan', text: 'text-cyan-600' },
  lime: { bg: 'bg-accent-lime', shadow: 'shadow-brutal-lime', text: 'text-lime-600' },
  pink: { bg: 'bg-accent-pink', shadow: 'shadow-brutal-pink', text: 'text-pink-600' },
  orange: { bg: 'bg-accent-orange', shadow: 'shadow-brutal', text: 'text-orange-500' },
  yellow: { bg: 'bg-accent-yellow', shadow: 'shadow-brutal-yellow', text: 'text-yellow-600' },
  coral: { bg: 'bg-accent-coral', shadow: 'shadow-brutal', text: 'text-red-500' },
};

export function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="// things I've built"
        icon={<FolderGit2 size={32} className="text-gray-900" />}
        accent="bg-accent-cyan"
      />

      {/* Intro Parallax */}
      <ParallaxBg
        image={IMAGES.womanCoding4}
        height="min-h-[40vh]"
        overlay="rgba(88, 28, 135, 0.8)"
      >
        <div className="mx-auto flex min-h-[40vh] max-w-5xl items-center px-4 md:px-8">
          <div className="brutal-border-4 bg-white p-6 shadow-brutal-lg md:p-10">
            <p className="font-mono text-sm uppercase text-purple-600">Featured Work</p>
            <p className="mt-3 text-lg text-gray-700 md:text-2xl">
              A selection of projects spanning <span className="font-bold text-purple-700">payment systems, AI infrastructure, design systems, and real-time collaboration tools</span>. Each one solved a hard problem at scale.
            </p>
          </div>
        </div>
      </ParallaxBg>

      {/* Projects Grid */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => {
              const accent = ACCENT_MAP[project.accent] || ACCENT_MAP.cyan;
              return (
                <div
                  key={project.id}
                  className={`brutal-card overflow-hidden ${accent.shadow}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image Header */}
                  <div className="relative h-56 overflow-hidden border-b-2 border-gray-900">
                    <img
                      src={IMAGES[project.image as keyof typeof IMAGES]}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-2 border-2 border-gray-900 bg-white px-3 py-1 shadow-brutal-sm">
                      <Calendar size={14} />
                      <span className="font-mono text-xs font-bold">{project.year}</span>
                    </div>
                    <div className={`absolute bottom-0 left-0 ${accent.bg} border-t-2 border-r-2 border-gray-900 px-4 py-1`}>
                      <span className="font-display text-sm font-bold uppercase text-gray-900">
                        #{String(project.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <User size={14} />
                      <span className="font-mono">{project.role}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-2 border-gray-900 bg-purple-100 px-3 py-1 font-mono text-xs font-bold text-purple-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex gap-3">
                      <button className="flex items-center gap-2 border-2 border-gray-900 bg-gray-900 px-4 py-2 font-display text-sm font-bold uppercase text-white transition-all hover:bg-purple-700">
                        <Github size={16} />
                        Code
                      </button>
                      <button className="flex items-center gap-2 border-2 border-gray-900 bg-white px-4 py-2 font-display text-sm font-bold uppercase text-gray-900 transition-all hover:bg-accent-yellow">
                        <ExternalLink size={16} />
                        Live
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
      <div className="border-t-4 border-gray-900 bg-purple-600 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
            Want to see more? Check out my GitHub.
          </p>
          <button className="mt-6 brutal-btn bg-accent-yellow text-gray-900">
            <Github size={18} className="mr-2 inline" />
            Visit GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
