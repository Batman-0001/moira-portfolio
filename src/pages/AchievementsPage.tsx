import { Award, Star, Trophy } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { ACHIEVEMENTS } from '@/data/portfolio';

const BADGE_BG: Record<string, string> = {
  bubblegum: 'bg-barbie-bubblegum',
  lavender:  'bg-barbie-lavender',
  mauve:     'bg-barbie-mauve',
  hot:       'bg-barbie-hot text-white',
  pastel:    'bg-barbie-pastel',
};

export function AchievementsPage() {
  return (
    <div>
      <PageHeader
        title="Achievements"
        subtitle="// milestones worth remembering"
        icon={<Award size={32} className="text-ink" />}
        accent="bg-barbie-bubblegum"
      />

      <ParallaxBg image={IMAGES.trophy1} height="min-h-[36vh]" overlay="rgba(229,94,153,0.75)">
        <div className="mx-auto flex min-h-[36vh] max-w-5xl items-center px-4 md:px-8">
          <div className="border-4 border-ink bg-barbie-bubblegum p-6 shadow-brutal-lg md:p-10">
            <p className="font-mono text-sm uppercase text-ink">Big energy, small ego</p>
            <p className="mt-3 text-lg text-ink md:text-2xl">
              The best wins are the ones that open doors for more people to build, learn, and lead.
            </p>
          </div>
        </div>
      </ParallaxBg>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((item, index) => (
              <article key={item.id} className="brutal-card overflow-hidden shadow-brutal-hot">
                <div className="relative h-52 overflow-hidden border-b-2 border-ink">
                  <img
                    src={IMAGES[item.image as keyof typeof IMAGES]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute bottom-0 left-0 flex items-center gap-2
                                   border-r-2 border-t-2 border-ink px-4 py-2
                                   ${BADGE_BG[item.accent] ?? 'bg-barbie-bubblegum'}`}>
                    <Trophy size={18} />
                    <span className="font-display font-bold">#{String(index + 1).padStart(2,'0')}</span>
                  </div>
                  <span className="absolute right-3 top-3 border-2 border-ink bg-white
                                   px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm">
                    {item.year}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-barbie-hot">
                    <Star size={18} className="fill-current" />
                    <span className="font-mono text-xs font-bold uppercase">Milestone</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-ink">{item.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
