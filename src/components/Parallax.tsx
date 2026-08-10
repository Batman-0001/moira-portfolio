import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.3, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top + window.scrollY;
      const scrolled = window.scrollY - elementTop + windowHeight;
      setOffset(scrolled * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  );
}

interface ParallaxBgProps {
  image: string;
  children: ReactNode;
  className?: string;
  overlay?: string;
  height?: string;
}

export function ParallaxBg({
  image,
  children,
  className = '',
  overlay = 'rgba(88, 28, 135, 0.75)',
  height = 'min-h-[60vh]',
}: ParallaxBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY - (rect.top + window.scrollY);
      setOffset(scrolled * 0.4);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${height} overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset}px) scale(1.15)`,
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: overlay }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
