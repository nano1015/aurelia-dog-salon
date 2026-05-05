import { ClipboardList, Heart, MessageCircle, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';
import { serviceFlowData } from '../../data/serviceFlowData';
import { fadeUp, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

const icons = [ClipboardList, MessageCircle, Scissors, Heart];

export function ServiceFlow() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="service-flow" className="border-b border-gold/35 bg-warm-white py-7 md:py-8">
      <div className="mx-auto max-w-[1620px] px-6">
        <SectionHeading title="SERVICE FLOW" className="[&_h2]:text-[38px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
          className="mt-8 grid gap-8 xl:grid-cols-4"
        >
          {serviceFlowData.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.article key={step.step} variants={fadeUp} className="relative flex items-center gap-6">
                {index < 3 && <span className="absolute left-[170px] right-[-20px] top-1/2 hidden border-t-2 border-dotted border-gold/55 xl:block" />}
                <div className="relative z-10 flex h-[118px] w-[118px] shrink-0 items-center justify-center rounded-full border border-gold bg-warm-white text-gold">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-serif text-lg text-white">
                    {step.step}
                  </span>
                  <Icon className="h-14 w-14" strokeWidth={1.45} />
                </div>
                <div className="relative z-10 bg-warm-white pr-2">
                  <h3 className="font-serif text-xl tracking-[0.12em] text-gold-dark">{step.titleEn}</h3>
                  <p className="mt-3 whitespace-pre-line text-[15px] leading-8 tracking-[0.06em] text-body-text">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
