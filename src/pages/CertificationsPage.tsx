import { BadgeCheck, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { CERTIFICATIONS } from '@/data/portfolio';

const BADGE_BG: Record<string, string> = {
  bubblegum: 'bg-barbie-bubblegum',
  lavender:  'bg-barbie-lavender',
  mauve:     'bg-barbie-mauve',
  hot:       'bg-barbie-hot text-white',
  pastel:    'bg-barbie-pastel',
};

export function CertificationsPage() {
  return (
    <div>
      <PageHeader
        title="Certifications"
        subtitle="// proof of the craft"
        icon={<BadgeCheck size={32} className="text-ink" />}
        accent="bg-barbie-mauve"
      />

      <ParallaxBg image={IMAGES.diploma} height="min-h-[36vh]" overlay="rgba(229,94,153,0.75)">
        <div className="mx-auto flex min-h-[36vh] max-w-5xl items-center px-4 md:px-8">
          <div className="border-4 border-ink bg-white p-6 shadow-brutal-lg md:p-10">
            <p className="font-mono text-sm uppercase text-barbie-hot">Always learning</p>
            <p className="mt-3 text-lg text-gray-700 md:text-2xl">
              Credentials are checkpoints, not finish lines.
              I keep learning so the work keeps getting better.
            </p>
          </div>
        </div>
      </ParallaxBg>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.id} className="brutal-card overflow-hidden shadow-brutal-hot">
                <div className="relative h-44 overflow-hidden border-b-2 border-ink">
                  <img
                    src={IMAGES[cert.image as keyof typeof IMAGES]}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute left-3 top-3 flex h-12 w-12 items-center justify-center
                                   border-2 border-ink shadow-brutal-sm ${BADGE_BG[cert.accent] ?? 'bg-barbie-bubblegum'}`}>
                    <ShieldCheck size={24} />
                  </div>
                  <span className="absolute bottom-3 right-3 border-2 border-ink bg-white
                                   px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm">
                    {cert.year}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-bold text-ink">{cert.title}</h2>
                  <p className="mt-2 font-mono text-sm text-barbie-hot">{cert.issuer}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">{cert.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-gray-200 pt-4">
                    <span className="flex items-center gap-2 font-mono text-xs text-gray-500">
                      <Calendar size={13} />{cert.credentialId}
                    </span>
                    <button className="flex items-center gap-1 font-display text-xs font-bold
                                       uppercase text-barbie-hot hover:text-ink">
                      <ExternalLink size={14} /> Verify
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
