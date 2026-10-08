import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const percentage = Math.min(Math.max((currentScroll / scrollHeight) * 100, 0), 100);
        setScrollProgress(percentage);
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-slate-800/30 backdrop-blur-xs"
    >
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-400 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(99,102,241,0.7)]"
        style={{
          width: `${scrollProgress}%`,
          transformOrigin: 'left',
        }}
      />
    </div>
  );
};
