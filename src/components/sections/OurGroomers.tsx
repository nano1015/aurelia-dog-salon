import { PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';
import { groomersData } from '../../data/groomersData';
import { fadeUp, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

export function OurGroomers() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="groomers" className="border-b border-gold/35 bg-warm-white py-9 md:py-10">
      <div className="mx-auto max-w-[1520px] px-6">
        <SectionHeading title="OUR GROOMERS" subtitle="トリマー紹介" className="[&_h2]:text-[64px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.14 } }, hidden: {} }}
          className="mt-7 grid gap-12 lg:grid-cols-3"
        >
          {groomersData.map((groomer) => (
            <motion.article
              key={groomer.nameEn}
              variants={fadeUp}
              className="relative bg-warm-white p-3 shadow-[0_12px_28px_rgba(66,43,14,0.07)] before:absolute before:inset-0 before:border before:border-gold/70 after:absolute after:inset-4 after:border after:border-gold/30"
            >
              <div className="relative z-10">
                <img src={groomer.image} alt={groomer.nameJp} className="h-[320px] w-full object-cover" />
                <div className="bg-warm-white px-8 pb-7 pt-3 text-center">
                  <h3 className="font-serif text-[38px] leading-none tracking-[0.14em] text-body-text">{groomer.nameEn}</h3>
                  <p className="mt-3 text-xl tracking-[0.18em]">{groomer.nameJp}</p>
                  <div className="my-4 flex items-center justify-center gap-3 text-gold">
                    <span className="h-px flex-1 bg-gold/70" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                    <span className="h-px flex-1 bg-gold/70" />
                  </div>
                  <div className="space-y-2 text-left text-[16px] leading-7 tracking-[0.06em]">
                    {[groomer.qualification, groomer.experience].map((item) => (
                      <p key={item} className="flex gap-3">
                        <PawPrint className="mt-1 h-5 w-5 shrink-0 fill-gold text-gold" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                  <p className="mt-5 whitespace-pre-line text-center text-[16px] leading-8 tracking-[0.06em]">{groomer.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
