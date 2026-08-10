import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg, Parallax } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { EXPERIENCES } from '@/data/portfolio';

export function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="Experience"
        subtitle="// my professional journey"
        icon={<Briefcase size={32} className="text-gray-900" />}
        accent="bg-accent-lime"
      />

      {/* Intro Parallax */}
      <ParallaxBg
        image={IMAGES.crtMonitors}
        height="min-h-[35vh]"
        overlay="rgba(26, 26, 26, 0.85)"
      >
        <div className="mx-auto flex min-h-[35vh] max-w-5xl items-center px-4 md:px-8">
          <div className="brutal-border-4 bg-accent-yellow p-6 shadow-brutal-lg md:p-10">
            <p className="font-mono text-sm uppercase text-gray-900">Career Timeline</p>
            <p className="mt-3 text-lg text-gray-900 md:text-2xl">
              8+ years building products at <span className="font-bold underline">Stripe, Airbnb, Shopify</span> and high-growth startups. From IC to principal engineer.
            </p>
          </div>
        </div>
      </ParallaxBg>

      {/* Timeline */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-1 border-l-4 border-dashed border-purple-400 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={exp.id}
                    className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 top-6 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center border-4 border-gray-900 bg-purple-600 md:left-1/2">
                      <div className="h-2 w-2 rounded-full bg-accent-yellow" />
                    </div>

                    {/* Card */}
                    <div className={`ml-16 w-full md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Parallax speed={isLeft ? -0.03 : 0.03}>
                        <div className="brutal-card overflow-hidden shadow-brutal-purple">
                          {/* Image */}
                          <div className="relative h-32 overflow-hidden border-b-2 border-gray-900">
                            <img
                              src={IMAGES[exp.image as keyof typeof IMAGES]}
                              alt={exp.company}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-purple-900/40" />
                            <div className="absolute bottom-2 left-3">
                              <span className="font-display text-2xl font-bold uppercase text-white drop-shadow-lg">
                                {exp.company}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            <h3 className="font-display text-xl font-bold text-gray-900">
                              {exp.role}
                            </h3>
                            <div className="mt-2 flex flex-wrap gap-3 text-xs font-mono text-gray-600">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={12} />
                                {exp.location}
                              </span>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-gray-700">
                              {exp.description}
                            </p>

                            {/* Key Achievements */}
                            <div className="mt-4">
                              <p className="mb-2 font-mono text-xs font-bold uppercase text-purple-600">
                                Key Wins
                              </p>
                              <ul className="space-y-2">
                                {exp.achievements.map((ach, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-purple-600" />
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Parallax>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download CTA */}
      <div className="border-t-4 border-gray-900 bg-accent-lime py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-display text-2xl font-bold uppercase text-gray-900 md:text-3xl">
            Want the full resume?
          </p>
          <button className="mt-6 brutal-btn bg-gray-900 text-white">
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
