import * as React from 'react';
import { gsap } from 'gsap';

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}

const TOTAL_ITEMS = 28;

const GridMotion: React.FC<GridMotionProps> = ({ items = [], gradientColor = 'black' }) => {
  const rowRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const startTimeRef = React.useRef<number | null>(null);
  const pausedRef = React.useRef(false);

  const defaultItems = React.useMemo(
    () => Array.from({ length: TOTAL_ITEMS }, (_, index) => `Item ${index + 1}`),
    []
  );

  const combinedItems = React.useMemo(() => {
    if (items.length === 0) return defaultItems;
    return [...items, ...defaultItems].slice(0, TOTAL_ITEMS);
  }, [items, defaultItems]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.ticker.lagSmoothing(0);

    const updateMotion = (): void => {
      const maxMoveAmount = 300;
      const baseDuration = 0.9;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];
      const baseSpeed = 28;

      if (pausedRef.current) return;

      if (startTimeRef.current === null) {
        startTimeRef.current = performance.now();
      }

      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      const loopDistance = maxMoveAmount * 2;
      const baseOffset = ((elapsed * baseSpeed) % loopDistance) - maxMoveAmount;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount = baseOffset * direction;

        gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    };

    gsap.ticker.add(updateMotion);

    return () => {
      gsap.ticker.remove(updateMotion);
    };
  }, []);

  return (
    <div
      className="h-full w-full overflow-hidden"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
        startTimeRef.current = null;
      }}
    >
      <section
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-[4] bg-[length:250px]"></div>
        <div className="relative z-[2] grid h-[150vh] w-[150vw] flex-none grid-cols-1 grid-rows-4 gap-4 origin-center rotate-[-15deg]">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-7 gap-4"
              style={{ willChange: 'transform, filter' }}
              ref={(element) => {
                if (element) rowRefs.current[rowIndex] = element;
              }}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#111] text-[1.5rem] text-white">
                      {typeof content === 'string' && (content.startsWith('http') || content.startsWith('/')) ? (
                        <div
                          className="absolute left-0 top-0 h-full w-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="z-[1] p-4 text-center">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="pointer-events-none relative left-0 top-0 h-full w-full"></div>
      </section>
    </div>
  );
};

export default GridMotion;
