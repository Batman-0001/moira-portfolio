import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import type { PageId } from './Navbar';
import { PROFILE } from '@/data/portfolio';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t-4 border-ink bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="font-display text-2xl font-bold text-barbie-bubblegum">
              {PROFILE.name}
            </h3>
            <p className="mt-2 font-mono text-sm text-barbie-mauve">{PROFILE.title}</p>
            <p className="mt-4 text-sm text-gray-400">{PROFILE.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-barbie-pastel">
              Navigate
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {(['home','projects','experience','certifications','achievements','contact'] as PageId[]).map((page) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className="w-fit font-mono text-sm text-gray-300 transition-colors hover:text-barbie-bubblegum"
                >
                  /{page}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-barbie-pastel">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              {[
                { href: PROFILE.social.github,   Icon: Github },
                { href: PROFILE.social.linkedin, Icon: Linkedin },
                { href: PROFILE.social.twitter,  Icon: Twitter },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={`https://${href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center border-2 border-white
                             bg-barbie-hot text-white transition-all
                             hover:-translate-y-1 hover:bg-barbie-bubblegum hover:text-ink"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-sm text-gray-400">{PROFILE.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4
                        border-t-2 border-barbie-hot pt-6 md:flex-row">
          <p className="font-mono text-xs text-gray-500">
            © 2026 {PROFILE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-gray-500">
            Built with <Heart size={12} className="fill-barbie-hot text-barbie-hot" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
