import { Droplets, Heart, PawPrint, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuresData } from '../../data/featuresData';
import { fadeUp, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

const icons = [Heart, Sparkles, PawPrint, Droplets];

export function SalonFeatures() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="features" className="border-b border-gold/35 bg-warm-white py-8 md:py-10">
      <div className="mx-auto max-w-[1620px] px-6">
        <SectionHeading title="SALON FEATURES" className="[&_h2]:text-[38px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {featuresData.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={feature.titleEn}
                variants={fadeUp}
                className="flex min-h-[210px] flex-col items-center justify-start px-9 text-center lg:border-l lg:border-gold/45 first:lg:border-l-0"
              >
                <Icon className="mb-5 h-16 w-16 text-gold" strokeWidth={1.55} />
                <h3 className="font-serif text-3xl tracking-[0.14em] text-body-text">{feature.titleEn}</h3>
                <p className="mt-4 whitespace-pre-line text-base leading-8 tracking-[0.08em] text-body-text">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
