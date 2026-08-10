import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import type { PageId } from './Navbar';
import { PROFILE } from '@/data/portfolio';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t-4 border-gray-900 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold text-accent-yellow">
              {PROFILE.name}
            </h3>
            <p className="mt-2 font-mono text-sm text-purple-200">
              {PROFILE.title}
            </p>
            <p className="mt-4 text-sm text-gray-400">{PROFILE.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-purple-300">
              Navigate
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {(['home', 'projects', 'experience', 'certifications', 'achievements', 'contact'] as PageId[]).map((page) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className="w-fit font-mono text-sm text-gray-300 transition-colors hover:text-accent-yellow"
                >
                  /{page}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-purple-300">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://${PROFILE.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border-2 border-white bg-purple-700 transition-all hover:-translate-y-1 hover:bg-accent-yellow hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <a
                href={`https://${PROFILE.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border-2 border-white bg-purple-700 transition-all hover:-translate-y-1 hover:bg-accent-yellow hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`https://${PROFILE.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border-2 border-white bg-purple-700 transition-all hover:-translate-y-1 hover:bg-accent-yellow hover:text-gray-900"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="mt-4 font-mono text-sm text-gray-400">{PROFILE.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t-2 border-purple-800 pt-6 md:flex-row">
          <p className="font-mono text-xs text-gray-500">
            © 2024 {PROFILE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-gray-500">
            Built with <Heart size={12} className="fill-accent-pink text-accent-pink" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
