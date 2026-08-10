import { BadgeCheck, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { CERTIFICATIONS } from '@/data/portfolio';

const accentMap: Record<string, string> = {
  cyan: 'bg-accent-cyan', lime: 'bg-accent-lime', pink: 'bg-accent-pink',
  orange: 'bg-accent-orange', yellow: 'bg-accent-yellow', coral: 'bg-accent-coral',
};

export function CertificationsPage() {
  return (
    <div>
      <PageHeader title="Certifications" subtitle="// proof of the craft" icon={<BadgeCheck size={32} />} accent="bg-accent-pink" />
      <ParallaxBg image={IMAGES.diploma} height="min-h-[36vh]" overlay="rgba(126, 34, 206, 0.78)">
        <div className="mx-auto flex min-h-[36vh] max-w-5xl items-center px-4 md:px-8">
          <div className="brutal-border-4 bg-white p-6 shadow-brutal-lg md:p-10">
            <p className="font-mono text-sm uppercase text-purple-600">Always learning</p>
            <p className="mt-3 text-lg text-gray-700 md:text-2xl">Credentials are checkpoints, not finish lines. I keep learning so the work keeps getting better.</p>
          </div>
        </div>
      </ParallaxBg>
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.id} className="brutal-card overflow-hidden shadow-brutal-purple">
                <div className="relative h-44 overflow-hidden border-b-2 border-gray-900">
                  <img src={IMAGES[cert.image as keyof typeof IMAGES]} alt={cert.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className={`absolute left-3 top-3 flex h-12 w-12 items-center justify-center border-2 border-gray-900 ${accentMap[cert.accent]} shadow-brutal-sm`}><ShieldCheck size={24} /></div>
                  <span className="absolute bottom-3 right-3 border-2 border-gray-900 bg-white px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm">{cert.year}</span>
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-bold text-gray-900">{cert.title}</h2>
                  <p className="mt-2 font-mono text-sm text-purple-600">{cert.issuer}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">{cert.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-gray-200 pt-4">
                    <span className="flex items-center gap-2 font-mono text-xs text-gray-500"><Calendar size={13} />{cert.credentialId}</span>
                    <button className="flex items-center gap-1 font-display text-xs font-bold uppercase text-purple-700 hover:text-purple-900"><ExternalLink size={14} /> Verify</button>
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
