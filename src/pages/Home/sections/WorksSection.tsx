import '@/types';
import * as React from 'react';
import AnimatedInView from '@/components/ui/AnimatedInView';
import GridMotion from '@/components/ui/GridMotion';

const workImages = [
  '/works/1.png',
  '/works/2.png',
  '/works/3.png',
  '/works/4.png',
  '/works/5.png',
  '/works/6.png',
  '/works/7.png',
];

const worksItems: (string | React.ReactNode)[] = Array.from(
  { length: 28 },
  (_, index) => workImages[index % workImages.length]
);

const WorksSection: React.FC = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32 overflow-hidden" id="works">
      <AnimatedInView className="text-center" delay={100}>
        <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          Built for the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Next Generation
          </span>{' '}
          of Brands
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          We don't just build websites; we build the digital foundation for your company's growth. See how we've
          helped our partners level up.
        </p>
      </AnimatedInView>

      <AnimatedInView delay={150} className="mt-6">
        <div className="relative overflow-hidden rounded-[32px] bg-transparent">
          <div className="relative h-[70vh] min-h-[460px] max-h-[820px]">
            <GridMotion items={worksItems} gradientColor="transparent" />
          </div>
        </div>
      </AnimatedInView>
    </section>
  );
};

export default WorksSection;
