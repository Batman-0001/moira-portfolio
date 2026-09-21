import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  accent?: string;
}

export function PageHeader({ title, subtitle, icon, accent = 'bg-barbie-bubblegum' }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b-4 border-ink bg-barbie-hot py-16 md:py-24">
      {/* hatch pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg,#000 0,#000 2px,transparent 2px,transparent 20px)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4">
          {icon && (
            <div className={`flex h-16 w-16 items-center justify-center border-4 border-ink
                             ${accent} shadow-brutal`}>
              {icon}
            </div>
          )}
          <div>
            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="mt-2 font-mono text-sm text-barbie-bubblegum md:text-base">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
