import { Home, FolderGit2, Briefcase, Award, BadgeCheck, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export type PageId = 'home' | 'projects' | 'experience' | 'certifications' | 'achievements' | 'contact';

const NAV_ITEMS: { id: PageId; label: string; icon: typeof Home }[] = [
  { id: 'home',           label: 'Home',        icon: Home },
  { id: 'projects',       label: 'Projects',    icon: FolderGit2 },
  { id: 'experience',     label: 'Experience',  icon: Briefcase },
  { id: 'certifications', label: 'Certs',       icon: BadgeCheck },
  { id: 'achievements',   label: 'Awards',      icon: Award },
  { id: 'contact',        label: 'Contact',     icon: Mail },
];

interface NavbarProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ current, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <>
      {/* nav bar — hot-pink background */}
      <nav className="sticky top-0 z-50 border-b-4 border-ink bg-barbie-hot shadow-brutal-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

          {/* Logo */}
          <button onClick={() => handleNav('home')} className="group flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center border-2 border-ink
                             bg-barbie-bubblegum font-display text-xl font-bold text-ink
                             shadow-brutal-sm transition-transform group-hover:rotate-12">
              M
            </span>
            <span className="hidden font-display text-lg font-bold uppercase tracking-tight text-white md:block">
              Moira<span className="text-barbie-bubblegum">.</span>dev
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = current === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2 border-2 px-4 py-2 font-display text-sm
                              font-bold uppercase tracking-wide transition-all ${
                    active
                      ? 'border-ink bg-barbie-bubblegum text-ink shadow-brutal-sm'
                      : 'border-transparent text-white hover:border-ink hover:bg-barbie-pastel hover:text-ink'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="border-2 border-ink bg-white p-2 shadow-brutal-sm md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-ink/50" />
          <div
            className="absolute right-0 top-0 h-full w-64 border-l-4 border-ink
                       bg-barbie-hot p-4 pt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const active = current === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-3 border-2 px-4 py-3 font-display
                                font-bold uppercase transition-all ${
                      active
                        ? 'border-ink bg-barbie-bubblegum text-ink shadow-brutal-sm'
                        : 'border-ink bg-white text-ink'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
